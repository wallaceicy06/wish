/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WishlistService } from './wishlist.service';

import {} from 'jasmine';

describe('WishlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistService]
    });
  });

  it('should ...', inject([WishlistService], (service: WishlistService) => {
    expect(service).toBeTruthy();
  }));
});
