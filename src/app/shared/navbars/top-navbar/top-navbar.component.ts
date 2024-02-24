import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { MenueBarComponent } from "../menue-bar/menue-bar.component";
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";

@Component({
    selector: 'app-top-navbar',
    standalone: true,
    templateUrl: './top-navbar.component.html',
    styleUrl: './top-navbar.component.scss',
    imports: [SearchBoxComponent, MenueBarComponent, UserNavbarComponent]
})
export class TopNavbarComponent {

}
