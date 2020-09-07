import { Component, OnInit, Output, OnChanges, EventEmitter, Input, SimpleChange } from '@angular/core';
import { ActionItem } from '../../../interfaces/tromelin.interface';



@Component({
  selector: 'app-taxon-action',
  templateUrl: './taxon-action.component.html',
  styleUrls: ['./taxon-action.component.css']
})
export class TaxonActionComponent implements OnInit {



  @Input() actionInfos: ActionItem = <ActionItem> {};
  @Output() onClose = new EventEmitter;



  constructor() { }



  ngOnInit() {

  }


  /*
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
  }
  */


  close = () => {
    this.onClose.emit( {closeWindow: true} );
  }
}
