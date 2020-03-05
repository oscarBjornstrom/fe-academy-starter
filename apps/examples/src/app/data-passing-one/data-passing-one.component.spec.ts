import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPassingOneComponent } from './data-passing-one.component';

describe('DataPassingOneComponent', () => {
  let component: DataPassingOneComponent;
  let fixture: ComponentFixture<DataPassingOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPassingOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPassingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
