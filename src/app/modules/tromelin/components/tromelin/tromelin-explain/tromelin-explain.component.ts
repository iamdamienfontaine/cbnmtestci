import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tromelin-explain',
  templateUrl: './tromelin-explain.component.html',
  styleUrls: ['./tromelin-explain.component.css']
})

export class TromelinExplainComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TromelinExplainComponent>
  ) { }

  ngOnInit() {
  }

}
