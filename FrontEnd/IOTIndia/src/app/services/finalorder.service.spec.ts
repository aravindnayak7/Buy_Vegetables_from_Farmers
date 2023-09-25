import { TestBed } from '@angular/core/testing';

import { FinalorderService } from './finalorder.service';

describe('FinalorderService', () => {
  let service: FinalorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
