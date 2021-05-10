import { TestBed } from '@angular/core/testing';

import { OrderServicService } from './order-servic.service';

describe('OrderServicService', () => {
  let service: OrderServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
