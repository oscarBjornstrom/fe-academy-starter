import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => console.log(params.id))
  }

  ngOnInit(): void {
  }

}
