export class Wishlist {
  constructor(public name = '') {}

  clone() {
    return new Wishlist(this.name);
  }
}
