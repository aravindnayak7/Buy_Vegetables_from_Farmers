import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Admin } from './Admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit{
aObj:Admin;
aList:Admin[];
aForm:FormGroup;
constructor(private http:HttpClient,private fb:FormBuilder,private adminservice:AdminserviceService){
  this.aObj=new Admin();
  this.aList=[];
  this.aForm=fb.group({
    category:['',Validators.required],
    productname:['',Validators.required],
    price:['',Validators.required],
    imageurl:['',Validators.required]
  })
}
  ngOnInit(): void {
    
  }
  addItemDetails(aForm:FormGroup){
    this.aObj=this.aForm.value;
    this.aList.push(this.aObj);
    if(aForm.valid){
      this.aForm.reset();
      this.adminservice.addItem(this.aObj).subscribe(
        data=>{
          // console.log(data,this.setItemsdata(this.aObj.productId)) secure obj
          console.log(data)
          // this.setItemsdata(data.productId)
        },
        err=>{
          console.log("error occured here")
        }
      )
      console.log(this.aObj.category);
      console.log(this.aObj.price);
      console.log(this.aObj.productname);
    }

  }
  // setItemsdata(productId:any){
  //   localStorage.setItem("productId",productId);
  //   console.log(productId);
  // }
  bounce(){
    
  }
}
