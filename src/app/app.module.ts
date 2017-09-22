import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Angulartics2Module, Angulartics2GoogleAnalytics} from 'angulartics2';
import {MdButtonModule, MdSidenavModule, MdDialog, MdDialogModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core';
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
import {VirtualTourComponent} from './virtual-tour/virtual-tour.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Eltzroth & Thompson Greenhouses'}
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {title: 'About Eltzroth & Thompson Greenhouses - Eltzroth & Thompson Greenhouses'}
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {title: 'Contact Us - Eltzroth & Thompson Greenhouses'}
    },
    {
        path: 'products',
        component: ProductsComponent,
        data: {title: 'Products - Eltzroth & Thompson Greenhouses'}
    },
    {
        path: 'specials',
        component: SpecialsComponent,
        data: {title: 'Specials - Eltzroth & Thompson Greenhouses'}
    },
    {
        path: 'locations',
        component: LocationsComponent,
        data: {title: 'Locations - Eltzroth & Thompson Greenhouses'}
    },
    {
        path: 'lil-sprouts',
        component: SproutsComponent,
        data: {title: 'Lil\' Sprouts - Eltzroth & Thompson Greenhouses'}
    }
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
        SproutsComponent,
        VirtualTourComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdDialogModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdSidenavModule,
        RouterModule.forRoot(appRoutes),
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBfMTka9Ky4b3bMIASHmaKLwMlg6nW7jkU'
        })
    ],
    providers: [
        Title
    ],
    entryComponents: [
        VirtualTourComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
