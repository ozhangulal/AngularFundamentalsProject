import { Component,OnInit } from '@angular/core';
import {IProduct} from './product';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products', yeniden routin yapacagimiz icin bunu sildik
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean=false;
    errorMessage:string;
    

    _listFilter:string;
    get listFilter():string{

        return this._listFilter;

    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products;
    }

    filteredProducts:IProduct[];
    products: IProduct[] = [

    ];

constructor(private productService:ProductService){
    
    //this.listFilter='cart'; sildik sonradan          //filtering a list 
}



onRatingClicked(message:string):void{

    this.pageTitle='Product List:'+message; //child componet üzerinden parent componente arama yaparken bu methodu kullandik

}
    performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);  //filtering a list
        
    }

    toggleImage():void{

        this.showImage=!this.showImage;

    }

    ngOnInit():void{
        this.productService.getProduct().subscribe({
            next:products=>
            {
                this.products=products,
                this.filteredProducts=this.products;
            },
            error:err=>this.errorMessage=err
        });
        
    }
}