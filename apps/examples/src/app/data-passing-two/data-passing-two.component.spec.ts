import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPassingTwoComponent } from './data-passing-two.component';

describe('DataPassingTwoComponent', () => {
  let component: DataPassingTwoComponent;
  let fixture: ComponentFixture<DataPassingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPassingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPassingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
