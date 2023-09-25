import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CategoryComponent } from './category/category.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdmingetallitmsComponent } from './admingetallitms/admingetallitms.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { OrdersComponent } from './orders/orders.component';
import { DisplayordersComponent } from './displayorders/displayorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FAQsComponent } from './faqs/faqs.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"viewproduct",component:ViewproductComponent},
  {path:"adminadd",component:AdminaddComponent},
  {path:"category",component:CategoryComponent},
  {path:"admintotalproduct",component:AdmingetallitmsComponent},
  // {path:"userdashboard",component:UserdashboardComponent},
  {path:"cart",component:CartItemsComponent},
  {path:"partner",component:PartnersComponent},
  {path:"orders",component:OrdersComponent},
  {path:"displayorders",component:DisplayordersComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"shipping",component:ShippingComponent},
  {path:"faq",component:FAQsComponent}
    // children:[{path:"userprofile" , component:UserProfileComponent}]
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
