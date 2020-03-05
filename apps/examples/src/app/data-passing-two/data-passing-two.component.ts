import { Component, OnInit } from '@angular/core';
import { DatapassingService } from '../datapassing.service';

@Component({
  selector: 'app-data-passing-two',
  templateUrl: './data-passing-two.component.html',
  styleUrls: ['./data-passing-two.component.css']
})
export class DataPassingTwoComponent implements OnInit {
  listItems = this.dataPassing.items;
  constructor(private dataPassing: DatapassingService) { }

  ngOnInit(): void {
  
   
  }


  get items () {
    return this.listItems;
  }
}
