import { TestBed } from '@angular/core/testing';

import { SimpleServiceWithDefaultService } from './simple-service-with-default.service';

describe('SimpleServiceWithDefaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleServiceWithDefaultService = TestBed.get(SimpleServiceWithDefaultService);
    expect(service).toBeTruthy();
  });
});
