import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Wishlist } from './wishlist';
import { WISHLISTS } from './mock-wishlists';

@Injectable()
export class WishlistService {

  constructor(private http: Http) { }

  getWishlists(): Promise<Wishlist[]> {
    return Promise.resolve(WISHLISTS);
  }
}
