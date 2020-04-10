import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HomeComponent } from './components/home/home.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryFilterPipe } from './pipes/country-filter.pipe';
import { ContinentListComponent } from './components/continent-list/continent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    HomeComponent,
    CountryDetailComponent,
    CountryFilterPipe,
    ContinentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
