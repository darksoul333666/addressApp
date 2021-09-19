import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Adress } from 'src/app/models/address';
import { XlsService } from 'src/app/services/xls.service';
import * as FileSaver from 'file-saver'

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent implements OnInit {
  address : Adress;
  addresses :Adress[];
  zoom : number;
  file : any

  constructor(
    private addressService: AddressService,
    private ExcelService : XlsService
  ) {
    this.address = new Adress("",0,0,"","");
    this.addresses = [];
    this.zoom = 17;

   }

  ngOnInit() {
    this.addressService.getAddresses().subscribe(
      r =>{
        this.addresses = r
      }
    )
    console.log(JSON.stringify(this.addresses));
  //   
  }
  saveFiles(){
    this.ExcelService.exportAsExcelFile(this.addresses,'Direcciones favoritas')
  }

}
