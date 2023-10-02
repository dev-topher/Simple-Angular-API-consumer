import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  http = inject(HttpClient);
  product!: Product;

  ngOnInit() {
    this.http.get<Product>('https://api.escuelajs.co/api/v1/products/3')
      .subscribe((data) => {
        this.product = data;
      });
  }

}
