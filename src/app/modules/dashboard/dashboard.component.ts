import { Component } from '@angular/core';
import { EmailBoxComponent } from "../../shared/components/email-box/email-box.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { ItemComponent } from "../../shared/components/item/item.component";
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from "../item-detail/item-detail.component";
import { Item } from '../../shared/models/item.model';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [EmailBoxComponent, ContactUsComponent, ItemComponent, CommonModule, ItemDetailComponent]
})
export class DashboardComponent {
    items: Item[] = [{
        title: "I'm a product",
        imageUrl: '../../../../assets/images/notebooks.webp',
        viewAll: 'View All'
    }, {
        title: "I'm a product",
        imageUrl: '../../../../assets/images/wrappingPaper.webp',
        viewAll: 'View All'
    }, {
        title: "I'm a product",
        imageUrl: '../../../../assets/images/noteCards.jpeg',
        viewAll: 'View All'
    }, {
        title: "I'm a product",
        imageUrl: '../../../../assets/images/prints.jpeg',
        viewAll: 'View All'
    }];
}
