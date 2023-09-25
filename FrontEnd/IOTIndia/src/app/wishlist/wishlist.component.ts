import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { OrderService } from '../services/order.service';
import { Category } from '../category/Category';
import { Admin } from '../adminadd/Admin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminserviceService } from '../services/adminservice.service';
import { Order } from '../cart-items/Order';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  aObj:Order;
  pro:any;
  item:any;
  constructor(
    private adminservice: AdminserviceService,
    private router: Router,
    private catservice:CategoryService,
    private addcart: OrderService
  ) {
    this.aObj=new Order();
  }

  ngOnInit() {
    this.pro = JSON.parse(localStorage.getItem("selectedProduct") || '{}');
    // alert(this.pro)
    this.catservice.getCategoryById(this.pro).subscribe(
      data=>{
        this.item=data;
      }
    )
  }

  addTOCart() {
    // alert("hee")
    alert(this.pro + "hello")
    alert(this.aObj)
    console.log(this.item)
    // this.aObj.productId = this.pro.productId;
    // this.aObj.productname = this.pro.productname;
    // this.aObj.category = this.pro.category;
    // this.aObj.price = this.pro.price;
    // this.aObj.imageurl = this.pro.imageurl;
    this.addcart.addToCart(this.item).subscribe(
      (response) => {
        alert(response)
        console.log('Item added to cart:', response);
        // Handle success, display a message, etc.
      },
      (error) => {
        console.error('Error adding item to cart:', error);
        // Handle error, display an error message, etc.
      }
    );
  }

}
