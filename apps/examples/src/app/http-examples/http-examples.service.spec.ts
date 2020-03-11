import { TestBed } from '@angular/core/testing';

import { HttpExamplesService } from './http-examples.service';

describe('HttpExamplesService', () => {
  let service: HttpExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
