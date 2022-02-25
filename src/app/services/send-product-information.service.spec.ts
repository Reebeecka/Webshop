import { TestBed } from '@angular/core/testing';

import { SendProductInformationService } from './send-product-information.service';

describe('SendProductInformationService', () => {
  let service: SendProductInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendProductInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
