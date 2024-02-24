import { Component } from '@angular/core';
import { EmailBoxComponent } from "../../shared/components/email-box/email-box.component";
import { CommonModule } from '@angular/common';
import { OrderedKeysPipe } from '../../shared/pipes/orderedKeys.pipe';
import { CustomPipesModule } from '../../shared/pipes/custom-pipes.module';

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss',
    imports: [EmailBoxComponent, CommonModule, CustomPipesModule]
})
export class ContactUsComponent {
    items = ["Note Cards", "Notebooks", "Wrapping Paper", "Prints", "Limited Edition", "Gift Card"];
    policies = ["Shipping & Returns", "Store Policy", "Payment Methods", "FAQ"];
    openingHours = ["Mon - Fri: 7am - 10pm", "Saturday: 8am - 10pm", "Sunday: 8am - 11pm"];
    addressKeys = ["line1", "line2", "email", "phone"];
    address = {
        line1: '500 Terry Francine',
        line2: 'San Francisco, CA 94158',
        email: 'info@mysite.com',
        phone: 'Tel: 123-456-7890'
    };
}
