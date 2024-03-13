import { Component } from '@angular/core';
import { FiltersBarComponent } from '../../shared/navbars/filters-bar/filters-bar.component';
import { ProductComponent } from '../../shared/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FiltersBarComponent, ProductComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  products: Product[] = [{
    title: "I'm a product 1",
    imageUrl: '../../../../assets/images/notebooks.webp',
    price: '$10.00',
    cartButton: true
  }, {
    title: "I'm a product 2",
    imageUrl: '../../../../assets/images/wrappingPaper.webp',
    price: '$12.00',
    cartButton: true
  }, {
    title: "I'm a product 3",
    imageUrl: '../../../../assets/images/noteCards.jpeg',
    price: '$14.00',
    cartButton: true
  }, {
    title: "I'm a product 4",
    imageUrl: '../../../../assets/images/prints.jpeg',
    price: '$16.00',
    cartButton: true
  }, {
    title: "I'm a product 5",
    imageUrl: '../../../../assets/images/notebooks.webp',
    price: '$10.00',
    cartButton: true
  }, {
    title: "I'm a product 6",
    imageUrl: '../../../../assets/images/wrappingPaper.webp',
    price: '$12.00',
    cartButton: true
  }, {
    title: "I'm a product 7",
    imageUrl: '../../../../assets/images/noteCards.jpeg',
    price: '$14.00',
    cartButton: true
  }, {
    title: "I'm a product 8",
    imageUrl: '../../../../assets/images/prints.jpeg',
    price: '$16.00',
    cartButton: true
  }, {
    title: "I'm a product 9",
    imageUrl: '../../../../assets/images/notebooks.webp',
    price: '$18.00',
    cartButton: true
  }];
}
