import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-europa-explain',
  templateUrl: './europa-explain.component.html',
  styleUrls: ['./europa-explain.component.css']
})
export class EuropaExplainComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EuropaExplainComponent>
  ) { }


  ngOnInit() {
  }


}
