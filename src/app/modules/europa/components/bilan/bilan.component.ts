import { Component, OnInit } from '@angular/core';
import { BilanService } from '../../services/bilan.service';

@Component({
  selector: 'bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent implements OnInit {

  constructor(
    private bilanSvc: BilanService
  ) { }

  bilans: any = {
    choca: {},
    sisal: {},
    fataque: {}
  }

  ngOnInit() {

    this.bilanSvc.getItems().subscribe(
      (data: any) => {

        this.bilans = data;

      
      });
  }



}
