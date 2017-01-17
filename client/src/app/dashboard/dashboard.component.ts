import { Component, OnInit } from '@angular/core';

import { WishlistService } from '../wishlist.service';
import { Wishlist } from '../wishlist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  wishlists: Wishlist[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlistService.getWishlists()
                        .then(wishlists => this.wishlists = wishlists);
  }

}
