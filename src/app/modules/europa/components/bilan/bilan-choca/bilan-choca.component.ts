import { Component, OnInit, Input } from '@angular/core';
import { BilanChocaSisal } from '../../../interfaces/bilan.interface';

@Component({
  selector: 'bilan-choca',
  templateUrl: './bilan-choca.component.html',
  styleUrls: ['./bilan-choca.component.css']
})
export class BilanChocaComponent implements OnInit {

  @Input()  bilan: BilanChocaSisal;

  constructor() { }

  ngOnInit() {
  }

}
