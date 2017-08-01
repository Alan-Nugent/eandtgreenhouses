import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdSidenavModule, MdDialog} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {GoogleAnalyticsEventsService} from './google-analytics-events.service';


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

    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,

    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfMTka9Ky4b3bMIASHmaKLwMlg6nW7jkU'
    })
  ],
  providers: [
    Title,
    GoogleAnalyticsEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
