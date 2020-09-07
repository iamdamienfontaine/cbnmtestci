import { Component, OnInit, Input } from '@angular/core';
import { BilanFataque } from '../../../interfaces/bilan.interface';

@Component({
  selector: 'bilan-fataque',
  templateUrl: './bilan-fataque.component.html',
  styleUrls: ['./bilan-fataque.component.css']
})
export class BilanFataqueComponent implements OnInit {

  @Input()  bilan: BilanFataque;

  constructor() { }

  ngOnInit() {
  }

}
