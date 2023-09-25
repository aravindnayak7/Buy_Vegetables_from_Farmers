import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../adminadd/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  delUrl="http://localhost:8086/admin/path/delete";
  constructor(private http:HttpClient) { }
  addItem(aObj:any):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8086/admin/path/additem",aObj);
  }
  getAllItems():Observable<Admin[]>{
    return this.http.get<Admin[]>("http://localhost:8086/admin/path/getAllitems");
  }
  delItems(id:any):Observable<Admin>{
    return this.http.delete<Admin>(`${this.delUrl}/${id}`)
  }
}
