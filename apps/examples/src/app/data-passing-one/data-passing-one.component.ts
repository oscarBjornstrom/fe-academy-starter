import { Component, OnInit } from '@angular/core';
import { DatapassingService } from '../datapassing.service';

@Component({
  selector: 'app-data-passing-one',
  templateUrl: './data-passing-one.component.html',
  styleUrls: ['./data-passing-one.component.css']
})
export class DataPassingOneComponent implements OnInit {

  testInput;
  constructor(private dataPassing:DatapassingService ) { }

  ngOnInit(): void {
  }

  saveItem() {

    this.dataPassing.addItemToArray(this.testInput);
  }
}
