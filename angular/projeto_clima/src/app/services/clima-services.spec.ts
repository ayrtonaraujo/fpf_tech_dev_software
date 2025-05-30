import { TestBed } from '@angular/core/testing';

import { ClimaServices } from './clima-services';

describe('ClimaServices', () => {
  let service: ClimaServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
