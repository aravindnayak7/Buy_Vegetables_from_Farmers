import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category/Category';
import { Observable } from 'rxjs';
import { Admin } from '../adminadd/Admin';
import { Order } from '../cart-items/Order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
ItemsById="http://localhost:8088/other/order/getitems";
delItem="http://localhost:8088/other/order/delete";
  constructor(private http:HttpClient) { 
    }
  addToCart(product: any) {
    return this.http.post<Order>("http://localhost:8088/other/order/additem", product);
  }
  getAllCartItems():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8088/other/order/getAllitems");
  }
  getItemById(productId:any):Observable<Order>{
    return this.http.get<Order>(`${this.ItemsById}/${productId}`)
  }
  delItemById(productId:any):Observable<Order>{
    return this.http.delete<Order>(`${this.delItem}/${productId}`)
  }
}
