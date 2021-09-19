import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adress } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
address :  Adress;
adresses : Adress[]
  constructor() { 
    this.address = new Adress("",0,0,"","");
    this.adresses = []
  }

  saveAddress(address :Adress){
    if(localStorage.getItem("adresses")){
      this.adresses = JSON.parse(localStorage.getItem("adresses")!)
    this.adresses.push(address);
    localStorage.setItem("adresses", JSON.stringify(this.adresses))
    } else{
      this.adresses.push(address);
    localStorage.setItem("adresses", JSON.stringify(this.adresses))
    }
    
  }
  getAddresses():Observable<Adress[]>{
    this.adresses = JSON.parse(localStorage.getItem("adresses")!)
    return of(this.adresses)
  }
}
