import { TestBed } from '@angular/core/testing';

import { GiftcardService } from './giftcard.service';

describe('GiftcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftcardService = TestBed.get(GiftcardService);
    expect(service).toBeTruthy();
  });
});
