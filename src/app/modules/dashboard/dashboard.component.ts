import { Component } from '@angular/core';
import { EmailBoxComponent } from "../../shared/components/email-box/email-box.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { ItemComponent } from "../../shared/components/item/item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [EmailBoxComponent, ContactUsComponent, ItemComponent, CommonModule]
})
export class DashboardComponent {
    items = [{
        title: 'Notebooks',
        imageUrl: '../../../../assets/images/notebooks.webp'
    }, {
        title: 'Wrapping Paper',
        imageUrl: '../../../../assets/images/wrappingPaper.webp'
    }, {
        title: 'Note Cards',
        imageUrl: '../../../../assets/images/noteCards.jpeg'
    }, {
        title: 'Prints',
        imageUrl: '../../../../assets/images/prints.jpeg'
    }];
}
