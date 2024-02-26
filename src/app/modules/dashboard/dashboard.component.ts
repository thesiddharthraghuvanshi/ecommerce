import { Component } from '@angular/core';
import { EmailBoxComponent } from "../../shared/components/email-box/email-box.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { ProductComponent } from "../../shared/components/product/product.component";
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from "../item-detail/item-detail.component";
import { Product } from '../../shared/models/product.model';
import { AboutComponent } from "../about/about.component";
import { BlogComponent } from "../blog/blog.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [EmailBoxComponent, ContactUsComponent, ProductComponent, CommonModule, ItemDetailComponent, AboutComponent, BlogComponent]
})
export class DashboardComponent {
    products: Product[] = [{
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
