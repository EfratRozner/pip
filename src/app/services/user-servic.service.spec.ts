import { TestBed } from '@angular/core/testing';

import { UserServicService } from './user-servic.service';

describe('UserServicService', () => {
  let service: UserServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
