export { Wishlist } from '../wishlist';
export { WishlistService } from '../wishlist.service';

import { Wishlist }        from '../wishlist';
import { WishlistService} from '../wishlist.service';

export var WISHLISTS: Wishlist[] = [
  new Wishlist('My first wishlist'),
  new Wishlist('My second wishlist')
];

export class FakeWishlistService implements WishlistService {

  wishlists = WISHLISTS.map(h => h.clone());
  lastPromise: Promise<any>;

  getWishlists(): Promise<Wishlist[]> {
    return this.lastPromise = Promise.resolve<Wishlist[]>(this.wishlists);
  }

}
