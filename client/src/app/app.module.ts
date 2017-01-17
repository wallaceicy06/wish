import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRouterModule } from './router/app-router.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistService } from './wishlist.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
