import { Component } from '@angular/core';
import { Category } from './Category';
import { CategoryService } from '../services/category.service';
import { RoutingService } from '../services/routing.service';
import { Router } from '@angular/router';
import { Admin } from '../adminadd/Admin';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  // aObj:Admin;
  aObj:Category;
  cList: Category[] = [];
  selectedCategory: Category | undefined;

  constructor(private categoryService: CategoryService,private router:Router,private addcart:OrderService) {
    this.aObj=new Admin();
   }

  ngOnInit() {            
    this.getCategories();
    this.getCategories1();
    this.getCategories2();
  }

  getCategories(){
    const category:String="Fruits";
    this.categoryService.getCategory(category).subscribe(
      data=>{
        this.cList=data;

      },
      err=>{
        console.log(err);
      }
    )
  }
  getCategories1(){
    const category:String="Rice";
    this.categoryService.getCategory(category).subscribe(
      data=>{
        this.cList=data;
      },err=>{
        console.log(err)
      }
    )
  }
  getCategories2(){
    const category:String="vegetables";
    this.categoryService.getCategory(category).subscribe(
      data=>{
        this.cList=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  selectCategory(data: Category) {
    this.selectedCategory = data;
    console.log(Category)
  }
  // viewProduct(category: any){
  //   alert(category)
  //   localStorage.setItem('selectedProduct', category);
  //   this.router.navigate(['/viewproduct']);
  //   console.log("it is an id"+category)
  // }
  viewProduct(category:any){
    localStorage.setItem("selectedProduct",category)
    console.log(category)
    this.router.navigate(['viewproduct'])
  }

  
  isBouncing: boolean = false;

  startBounceAnimation() {
    this.isBouncing = true;
    setTimeout(() => {
      this.isBouncing = false;
    }, 500);
  }
  // addTOCart(pro:any){
  //   alert("Hello")
  //   this.addcart.addtoCart(this.aObj).subscribe(
      
  //     data=>{
        
  //       console.log(data)
  //     },
      
  //   )
  // }
}
