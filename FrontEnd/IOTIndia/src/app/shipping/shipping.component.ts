import { Component } from '@angular/core';
import { Ordered } from '../orders/Ordered';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  aObj:Ordered;
  pro:any;
  constructor(private catservice:CategoryService){
    this.aObj=new Ordered();
  }
  ngOnInit(){
    this.pro=localStorage.getItem("selectedProduct");
    this.catservice.getCategoryById(this.pro).subscribe(
      data=>{
        this.pro=data;
      }
    );
  }
}
