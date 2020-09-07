import { Component, OnInit, Input } from '@angular/core';

import { ActionsSource } from './taxon-actions.source';
import { ActionItem, TaxonItem } from '../../../interfaces/tromelin.interface';
import { TromelinService } from '../../../services/tromelin.service';



@Component({
  selector: 'app-taxon-actions',
  templateUrl: './taxon-actions.component.html',
  styleUrls: ['./taxon-actions.component.css']
})
export class TaxonActionsComponent implements OnInit {

  @Input() taxonId: number;

  public data = {
    items: <ActionItem[]>[],
    itemsCount: <number> 0,
    itemSelected: <TaxonItem> {},
    filters: {
      taxon_id: <number>null,
      type_action: <string> '',
      itemsPerPage: <number>25,
      currentPage: <number>1
    },
    ui: {
      displayActionInfos: <boolean> false
    }

  }

  public ds;

  /**
   * 
   * @param tromelinSvc 
   */
  constructor(
    public tromelinSvc: TromelinService
  ) { }



  /**
   * 
   */
  ngOnInit() {
    this.data.filters.taxon_id = this.taxonId;
    this.ds = new ActionsSource( this.tromelinSvc, this.data.filters );
  }

  
  filterActions = () => {
    this.ds.updateSource( this.data.filters );    
  }



  showActionInfos = ( action: TaxonItem ) => {
    this.data.ui.displayActionInfos = true;
    this.data.itemSelected = action;
  }



  closeActionInfos = ( ) => {
    this.data.itemSelected = <TaxonItem> {};
    this.data.ui.displayActionInfos = false;
  }

}