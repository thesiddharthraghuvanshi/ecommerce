import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AboutComponent } from './modules/about/about.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ShopComponent } from './modules/shop/shop.component';
import { ItemDetailComponent } from './modules/item-detail/item-detail.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'item-detail', component: ItemDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', component: DashboardComponent }
];
