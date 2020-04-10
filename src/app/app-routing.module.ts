import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { ContinentListComponent } from './components/continent-list/continent-list.component';


const routes: Routes = [
  
 {
   path:'countries', component:CountriesListComponent
 },
 {
   path:'countries/:id', component:CountryDetailComponent
 },
 {
   path:'continents',component:ContinentListComponent
 },
 {
  path:'home', component:HomeComponent
 },
 {
  path:'', redirectTo:'home',pathMatch:'full'
},
{
  path:'**', redirectTo:'home',pathMatch:'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
