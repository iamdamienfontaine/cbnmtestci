import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { TaxonItem } from '../../../interfaces/tromelin.interface';



@Component({
  selector: 'app-taxon-infos',
  templateUrl: './taxon-infos.component.html',
  styleUrls: ['./taxon-infos.component.css']
})

export class TaxonInfosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TaxonInfosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaxonItem,
  ) { }

  ngOnInit() {
  }

}
