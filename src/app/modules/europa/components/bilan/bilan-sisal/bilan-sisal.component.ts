import { Component, OnInit, Input } from '@angular/core';
import { BilanChocaSisal } from '../../../interfaces/bilan.interface';

@Component({
  selector: 'bilan-sisal',
  templateUrl: './bilan-sisal.component.html',
  styleUrls: ['./bilan-sisal.component.css']
})
export class BilanSisalComponent implements OnInit {

  @Input()  bilan: BilanChocaSisal;

  constructor() { }

  ngOnInit() {
  }

}
