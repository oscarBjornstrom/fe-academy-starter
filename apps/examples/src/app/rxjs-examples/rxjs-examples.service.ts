import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsExamplesService {
  
  prop = 'string';
  


  state = new Subject();


  behaviour: BehaviorSubject<any> = new BehaviorSubject('');


  replay: ReplaySubject<string> = new ReplaySubject(3);

  constructor() { 
    this.replay.next('first')
    this.replay.next('second')
    this.replay.next('third')
    this.replay.next('fourth')
  }
}
