import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../../shared/components/product/product.component";
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
  imports: [CommonModule, ProductComponent]
})
export class ItemDetailComponent implements OnInit {

  paths = ["Home / ", "All Products / ", "I'm a Product"];
  smallImages = [1, 2];
  toggleInfo: boolean = false;
  togglePolicy: boolean = false;
  toggleShipping: boolean = false;
  products: Product[] = [{
    title: "I'm a product",
    imageUrl: '../../../../assets/images/notebooks.webp',
    price: '$10.00'
  }, {
    title: "I'm a product",
    imageUrl: '../../../../assets/images/wrappingPaper.webp',
    price: '$10.00'
  }, {
    title: "I'm a product",
    imageUrl: '../../../../assets/images/noteCards.jpeg',
    price: '$10.00'
  }, {
    title: "I'm a product",
    imageUrl: '../../../../assets/images/prints.jpeg',
    price: '$10.00'
  }];

  constructor() { }

  ngOnInit(): void {

  }

  toggleInfoButton(): void {
    this.toggleInfo = !this.toggleInfo;
    if (this.togglePolicy) {
      this.togglePolicy = false;
    }

    if (this.toggleShipping) {
      this.toggleShipping = false;
    }
  }

  togglePolicyButton(): void {
    this.togglePolicy = !this.togglePolicy;
    if (this.toggleInfo) {
      this.toggleInfo = false;
    }

    if (this.toggleShipping) {
      this.toggleShipping = false;
    }
  }

  toggleShippingButton(): void {
    this.toggleShipping = !this.toggleShipping;
    if (this.toggleInfo) {
      this.toggleInfo = false;
    }

    if (this.togglePolicy) {
      this.togglePolicy = false;
    }
  }

}
