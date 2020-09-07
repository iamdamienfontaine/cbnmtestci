import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PopulationService } from '../../../services/population.service';

@Component({
  selector: 'population-suivi-fataque',
  templateUrl: './population-suivi-fataque.component.html',
  styleUrls: ['./population-suivi-fataque.component.css']
})
export class PopulationSuiviFataqueComponent implements OnInit {


  @Input()  suivi_id: number;
  @Input()  taxon_id: number;
  @Output() onClose = new EventEmitter();

  data: any = {
    item: {}
  };



  constructor(
    private populationSvc: PopulationService
  ) { }

  ngOnInit() {
    this.populationSvc.getSuivi( this.taxon_id, this.suivi_id ).subscribe(
      (data: any) => {
        this.data.item = data.suivi;
      });
  }


  
  close() {
    this.onClose.emit({data: { test: 'hhhh'}});
  }

}
