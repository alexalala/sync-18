/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DummyDataService } from './dummy-data.service';

describe('Service: DummyData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyDataService]
    });
  });

  it('should ...', inject([DummyDataService], (service: DummyDataService) => {
    expect(service).toBeTruthy();
  }));
});
