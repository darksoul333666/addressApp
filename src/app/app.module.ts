import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlacesService } from './services/places.service';
import { ListAddressesComponent } from './components/list-addresses/list-addresses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListAddressesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    CommonModule,
    AppRoutingModule,
    FormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPOc6lcekAfNZlg8jzc1_LgrHwcO2rOnQ'
    }),
    HttpClientModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
