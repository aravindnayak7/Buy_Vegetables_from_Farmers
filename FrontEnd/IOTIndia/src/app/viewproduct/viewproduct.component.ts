import { Component } from '@angular/core';
import { Admin } from '../adminadd/Admin';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  aObj:Admin;
  pro:any;
  constructor(private catservice:CategoryService){
    this.aObj=new Admin();
  }
  ngOnInit():void{
    this.pro=localStorage.getItem("selectedProduct")
    this.catservice.getCategoryById(this.pro).subscribe(
      data=>{
        this.pro=data;
      }
    )
  }
  // getItems(){
  //  const productId:String="";
  //   localStorage.getItem("productId");
  //   alert("hello")
  // }
  // getCatById(){
  //   this.catservice.getCategoryById(productId).subscribe
  // }
  // getItems(){
  //   const productId:String="";
  //   localStorage.getItem("productId");

  // }
  
}
