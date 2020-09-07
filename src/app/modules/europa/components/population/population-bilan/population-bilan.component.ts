import { Component, OnInit, Input } from '@angular/core';
import { PopulationItem, PopulationItemBilan } from '../../../interfaces/populations.interface';

@Component({
  selector: 'population-bilan',
  templateUrl: './population-bilan.component.html',
  styleUrls: ['./population-bilan.component.css']
})
export class PopulationBilanComponent implements OnInit {

  @Input()  population: PopulationItem;
  @Input()  bilan: PopulationItemBilan;

  constructor() { }

  ngOnInit() {
    // Object.assign( this.bilan, {
    //   actions: {},
    //   suivis: {}
    // })

    
  }

}
