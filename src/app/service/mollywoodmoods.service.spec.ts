import { TestBed } from '@angular/core/testing';

import { MollywoodmoodsService } from './mollywoodmoods.service';

describe('MollywoodmoodsService', () => {
  let service: MollywoodmoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MollywoodmoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
