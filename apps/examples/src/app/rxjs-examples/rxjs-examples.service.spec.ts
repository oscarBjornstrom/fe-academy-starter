import { TestBed } from '@angular/core/testing';

import { RxjsExamplesService } from './rxjs-examples.service';

describe('RxjsExamplesService', () => {
  let service: RxjsExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
