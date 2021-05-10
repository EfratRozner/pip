import { TestBed } from '@angular/core/testing';

import { DestanitionServisService } from './destanition-servis.service';

describe('DestanitionServisService', () => {
  let service: DestanitionServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestanitionServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
