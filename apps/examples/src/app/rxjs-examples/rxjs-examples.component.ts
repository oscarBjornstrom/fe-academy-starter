import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, interval, Subscription, Observable, Subscribable, Subject } from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import { RxjsExamplesService } from './rxjs-examples.service';
@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.css']
})
export class RxjsExamplesComponent implements OnInit, OnDestroy {


  var$ = this.service.behaviour;

  currentval;

  private _onDestroy = new Subject();

//   sequenceSubsriber = (observer) => {
//     observer.next('apple'),
//     observer.next('banana'),
//     observer.error(),
//     observer.next('orange')
//   } 

//  sequence = new Observable(this.sequenceSubsriber)

//   interval = interval(1000);
// subscription: Subscription;

  constructor(public service: RxjsExamplesService) { }
  ngOnInit(): void {


    this.var$.pipe(takeUntil(this._onDestroy)).subscribe(val => this.currentval = val);
    // setTimeout(() => {this.interval.subscribe(console.log)}, 3000 )

  //  this.subscription =  this.interval.subscribe(console.log)
  // this.sequence.subscribe(console.log);
  // this.service.state.subscribe(console.log)

  // this.service.behaviour.subscribe(console.log)

  this.service.replay.pipe(takeUntil(this._onDestroy)).subscribe(console.log);

  }

  emitNew() {
    // this.service.state.next('new emit');
    this.service.behaviour.next('new emit');
  }


  logCurrentValue() {
    console.log(this.service.behaviour.value)
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();

    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
