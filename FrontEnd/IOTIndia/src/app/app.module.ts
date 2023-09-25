import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmingetallitmsComponent } from './admingetallitms/admingetallitms.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminsidenavComponent } from './adminsidenav/adminsidenav.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { WeekendTourComponent } from './weekend-tour/weekend-tour.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrdersComponent } from './orders/orders.component';
import { DisplayordersComponent } from './displayorders/displayorders.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FAQsComponent } from './faqs/faqs.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    AdminaddComponent,
    AdmingetallitmsComponent,
    AdminsidenavComponent,
    CategoryComponent,
    HomeComponent,
    HeaderComponent,
    UserdashboardComponent,
    CarouselComponent,
    ViewproductComponent,
    WishlistComponent,
    CartItemsComponent,
    PartnersComponent,
    FooterComponent,
    WeekendTourComponent,
    AboutUsComponent,
    OrdersComponent,
    DisplayordersComponent,
    ShippingComponent,
    FAQsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
