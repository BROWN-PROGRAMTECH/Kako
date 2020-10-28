import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { BillComponent } from './bill/bill.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { InAuctionNowComponent } from './in-auction-now/in-auction-now.component';
import { CategorieComponent } from './categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    CustomerComponent,
    ProductComponent,
    HistoryComponent,
    BillComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AuthComponent,
    UserProfileComponent,
    AdminProfileComponent,
    InAuctionNowComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
