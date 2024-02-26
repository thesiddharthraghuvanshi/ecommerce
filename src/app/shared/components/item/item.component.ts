import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item: Item = {
    title: '',
    imageUrl: '',
    viewAll: '',
    price: ''
  };
}
