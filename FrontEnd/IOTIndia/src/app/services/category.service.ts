import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  allList="http://localhost:8085/api/v1/getcatitems";
  itemsById="http://localhost:8085/api/v1/getitems";
  constructor(private http:HttpClient) {}
  getCategory(category:any):Observable<Category[]>{
    return this.http.get<Category[]>(`${this.allList}/${category}`);
  }
  getCategoryById(productId:any):Observable<Category>{
    return this.http.get<Category>(`${this.itemsById}/${productId}`)
  }
  
}
