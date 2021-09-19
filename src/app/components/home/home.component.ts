import { Component, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { AddressService } from 'src/app/services/address.service';
import { Adress } from '../../models/address'
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @ViewChild("placesRef") placesRef : GooglePlaceDirective | undefined;


  lat :number;
  lon : number;
  zoom : number;
  mapTypeId :string
  options :any;
  address :Adress;
  phone : string
  constructor(
    private addresService : AddressService,
    private router : Router
  ){
    this.lat = 0;
    this.lon = 0;
    this.zoom = 18;
    this.mapTypeId = 'HYBRID'
    this.address = new Adress("",0,0,"","");
    this.phone = ""
  
  }
    ngOnInit() {
      this.setCurrentPosition();
  
  
        }
    public handleAddressChange(address: Address) {
      console.log(address.formatted_address);
      console.log(address.geometry);
  
      this.address.latitud = address.geometry.location.lat();
      this.address.longitud = address.geometry.location.lng();
      this.address.Direccion = address.formatted_address;
      this.address.number= address.formatted_phone_number
      console.log(this.phone)
  
  }
  setCurrentPosition(){
    navigator.geolocation.getCurrentPosition(position=>{
      this.address.latitud = position.coords.latitude;
  
      this.address.longitud = position.coords.longitude
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude
  
    });
  console.log(this.address)
    
   
  
  }
  setAdress(){
    this.addresService.saveAddress(this.address)
    console.log(JSON.stringify(this.address));
    Swal.fire({
      icon: 'success',
      title: 'Ubicación guardada',
      text: '¡Velo ahora mismo!',
      timer: 2000
    });
    this.router.navigate(["/list-addresses"])
  }
  

}
