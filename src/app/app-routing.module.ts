import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListAddressesComponent } from './components/list-addresses/list-addresses.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'list-addresses', component: ListAddressesComponent},
  { path: '', component: HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
