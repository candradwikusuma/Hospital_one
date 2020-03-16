import { TestBed } from '@angular/core/testing';

import { ListdokterService } from './listdokter.service';

describe('ListdokterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListdokterService = TestBed.get(ListdokterService);
    expect(service).toBeTruthy();
  });
});
