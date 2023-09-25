import { Component } from '@angular/core';
import { FinalorderService } from '../services/finalorder.service';
import { Ordered } from './Ordered';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  
  pro:any;
  item:any;
  
  constructor(private finalorder:FinalorderService,private category:CategoryService){
    
  }
  ngOnInit(){
    
    this.pro=localStorage.getItem("selectedProduct"),
    // alert(this.pro)
    this.category.getCategoryById(this.pro).subscribe(
      data=>{
        this.item=data;
      }
    );
    // this.addOrderItem();
    
  }

  addOrderItem(){
    // alert(this.pro)
    this.finalorder.addOrder(this.item).subscribe(
      (response)=>{
        console.log(response)
        
      }
    );
  }
 
}
