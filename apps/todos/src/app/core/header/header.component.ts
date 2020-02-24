import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fe-academy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Routing excercise';
  constructor() {}

  ngOnInit(): void {}
}
