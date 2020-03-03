import { Component, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewInit, ContentChild, AfterContentInit } from "@angular/core";

@Component({
    selector: 'app-example',
    templateUrl: './examplecomp.component.html'
}
)
export class ExampleComponent implements OnInit, AfterViewInit, AfterContentInit {

    @Input() newRenderText: string;
    @Output() alertMeInstead = new EventEmitter();

    @ViewChild('myDiv') aDiv;
    @ContentChild('parentDiv') parentDiv;

    alertThis() {
        this.alertMeInstead.emit('Hello from the child component');
    }

    ngOnInit() {
       // this.alertThis()
    }

    ngAfterViewInit() {
        console.log(this.aDiv)
    }

    ngAfterContentInit() {
        console.log(this.parentDiv)
    }
}