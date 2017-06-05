import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from '../app/header/header.component';
import {FooterComponent} from '../app/footer/footer.component';

import {HomeComponent} from '../app/home/home.component';
import {AboutComponent} from '../app/about/about.component';
import {ContactComponent} from '../app/contact/contact.component';
import {ProductsComponent} from '../app/products/products.component';
import {SpecialsComponent} from '../app/specials/specials.component';
import {LocationsComponent} from '../app/locations/locations.component';
import {SproutsComponent} from '../app/sprouts/sprouts.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'specials', component: SpecialsComponent},
    {path: 'locations', component: LocationsComponent},
    {path: 'lil-sprouts', component: SproutsComponent},
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        ProductsComponent,
        SpecialsComponent,
        LocationsComponent,
        SproutsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule {}
