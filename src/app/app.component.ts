import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { TopNavbarComponent } from "./shared/navbars/top-navbar/top-navbar.component";
import { BottomNavbarComponent } from "./shared/navbars/bottom-navbar/bottom-navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DashboardComponent, TopNavbarComponent, BottomNavbarComponent]
})
export class AppComponent {
  title = 'women-ecommerce';
}
