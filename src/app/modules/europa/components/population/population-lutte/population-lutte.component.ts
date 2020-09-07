import { Component, OnInit, Input, SimpleChange, EventEmitter, Output } from '@angular/core';

import { PopulationService } from '../../../services/population.service';



@Component({
  selector: 'population-lutte',
  templateUrl: './population-lutte.component.html',
  styleUrls: ['./population-lutte.component.css']
})
export class PopulationLutteComponent implements OnInit {

  @Input()  lutte_id: number;
  @Output() onClose = new EventEmitter;

  data: any = {
    item: {}
  };

  constructor(
    private populationSvc: PopulationService
  ) { }

  ngOnInit() {

    this.populationSvc.getLutte( this.lutte_id ).subscribe(
      (data: any) => {
        this.data.item = data.lutte;
      });
  }  

  close() {
    this.onClose.emit({data: { test: 'hhhh'}});
  }

}
