import { DataSource } from "@angular/cdk/table";
import { Subscription, BehaviorSubject, Observable } from "rxjs";
import { CollectionViewer } from "@angular/cdk/collections";
import { ActionItem } from '../../../interfaces/tromelin.interface';
import { TromelinService } from '../../../services/tromelin.service';


export class ActionsSource extends DataSource<ActionItem | undefined> {
  
    private data = {
      source: Array.from<ActionItem>({length: 1}),
      filters: {
        taxon_id: <number>null,
        type_action: <string> '',
        itemsPerPage: <number>25,
        currentPage: <number>1
      }
    }
  
    private subscription = new Subscription();
    private actionsSubject = new BehaviorSubject<ActionItem[]>(this.data.source);
  
    private fetchedPages = new Set<number>();
    private pageSize = 25;
  
    constructor(
      public tromelinSvc: TromelinService,
      public filters: any
    ) {
      
      super();
  
      this.data.filters = filters;
    }
  
  
  
    connect(collectionViewer: CollectionViewer): Observable<(ActionItem | undefined)[]> {
  
      this.subscription.add( collectionViewer.viewChange.subscribe(range => {
  
        const startPage = this.getPageForIndex(range.start );
        const endPage = this.getPageForIndex(range.end-1);
  
        for (let i = startPage; i <= endPage; i++) {
          this.fetchPage(i);
        }
  
      }));
      
      return this.actionsSubject;
    }
  
  
  
    disconnect(): void {
      this.subscription.unsubscribe();
    }
  
  
  
    private getPageForIndex(index: number): number {
      return Math.floor(index / this.pageSize);
    }
  
  
  
    private fetchPage(page: number) {
      if (this.fetchedPages.has(page)) {
        return;
      }
      this.fetchedPages.add(page);
  
      let filters = {
        taxon_id: <number>this.data.filters.taxon_id,
        itemsPerPage: <number>25,
        type_action: '',
        // Attention au + 1
        currentPage: page + 1
      };

      if ( this.data.filters.type_action !== undefined ) {
        filters.type_action =  <string>this.data.filters.type_action;
      }

      this.tromelinSvc.getTaxonsActions( filters )
        .subscribe(
          ( data ) => {
       
            if ( this.data.source.length != data.rowCount ){
              this.data.source.length = data.rowCount;
            }
  
            this.data.source.splice( 
                page * this.pageSize, 
                this.pageSize, 
                ...data.items
                // ...Array.from({length: this.pageSize}).map((_, i) => `Item #${page * this.pageSize + i}`)
              );
  
            this.actionsSubject.next(this.data.source);
          }
        );
        
    }
  
  
    public updateSource( filters: any ) {
  
      this.data.source = Array.from<ActionItem>({length: 0});
      this.fetchedPages.clear();
      this.data.filters = filters;
      this.fetchPage(0);
  
    }
  
  }