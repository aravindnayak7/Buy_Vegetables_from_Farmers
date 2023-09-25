import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Admin } from '../adminadd/Admin';

@Component({
  selector: 'app-admingetallitms',
  templateUrl: './admingetallitms.component.html',
  styleUrls: ['./admingetallitms.component.css']
})
export class AdmingetallitmsComponent implements OnInit{
  aObj:Admin;
  items: Admin[] = [];
  constructor(private adminservice:AdminserviceService){
    this.aObj=new Admin();
    this.items
}
  ngOnInit(): void {
    this.getAllItemDetails();
  }
  // saveItemDetails():void{
  //   localStorage.setItem("itemdetails",JSON.stringify(this.itemdetials))
  // }
  // setItem(productId:any){
  //   localStorage.setItem("productId",productId)
  //   console.log(this.aObj.productId)
  // }
  getAllItemDetails(){
    this.adminservice.getAllItems().subscribe(
      data=>{
        this.items=data;
        console.log(data);
        
        // localStorage.setItem("",JSON.stringify(this.aObj.productId))
      },
      err=>{
        console.log("error occured here");
      }
    )
  }
  deleteItems(productId:any){
    this.adminservice.delItems(productId).subscribe(
      resp=>{
        this.getAllItemDetails();
      }
    )
  }
}
