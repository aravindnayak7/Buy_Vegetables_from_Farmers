import { Component } from '@angular/core';
import { FinalorderService } from '../services/finalorder.service';
import { Ordered } from '../orders/Ordered';

@Component({
  selector: 'app-displayorders',
  templateUrl: './displayorders.component.html',
  styleUrls: ['./displayorders.component.css']
})
export class DisplayordersComponent {
  allitems:Ordered[]=[];
  orderObject:Ordered;
  constructor(private finalorder:FinalorderService){
    this.orderObject=new Ordered();
  }
  ngOnInit():void{
    this.allItemsList();
  }
  allItemsList(){
    this.finalorder.getOrderedItems().subscribe(
      data=>{
        this.allitems=data;
      }
    );
  }
  deleteOrders(productId:any){
    this.finalorder.delItemById(productId).subscribe(
      Response=>{
       this.allItemsList();
      }
    );
  }
}
