import { Injectable } from '@angular/core';

import { Wishlist } from './wishlist';
import { WISHLISTS } from './mock-wishlists';

@Injectable()
export class WishlistService {

  constructor() { }

  getWishlists(): Promise<Wishlist[]> {
    return Promise.resolve(WISHLISTS);
  }
}
