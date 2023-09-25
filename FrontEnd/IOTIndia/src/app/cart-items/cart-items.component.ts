import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from './Order';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  items:Order[]=[];
  sObj:Order;
  constructor(private wishlist:OrderService){
    this.sObj=new Order();
  }
  ngOnInit():void{
    this.getEntireList();
  }
  getEntireList(){
    this.wishlist.getAllCartItems().subscribe(
      data=>{
        this.items=data;
        // alert(data)
        console.log(data)
      }
    );
  }
  deleteProduct(productId:any){
    this.getEntireList();
    this.wishlist.delItemById(productId).subscribe(
      Response=>{
        this.getEntireList();
      }
    )
  }
}
