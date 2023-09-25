import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordered } from '../orders/Ordered';

@Injectable({
  providedIn: 'root'
})
export class FinalorderService {
  delItem="http://localhost:8087/cart/order/delitem"
  constructor(private http:HttpClient) { }
  addOrder(product:any){
    return this.http.post<Ordered>("http://localhost:8087/cart/order/additem",product);
  }
  getOrderedItems():Observable<Ordered[]>{
    return this.http.get<Ordered[]>("http://localhost:8087/cart/order/getAllitems");
  }
  delItemById(productId:any):Observable<Ordered>{
    return this.http.delete<Ordered>(`${this.delItem}/${productId}`)
  }
}
