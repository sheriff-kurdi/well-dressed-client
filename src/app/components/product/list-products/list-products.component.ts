import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: any;
  constructor(private productsService: ProductsService) {
    this.productsService.getAll().then(p => this.products = p);

    console.log(this.products);



  }

  ngOnInit(): void {
  }

}
