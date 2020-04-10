import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from 'src/app/services/coronavirus-data.service';
import { ICountryData } from 'src/app/interfaces/icountry-data';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countryWiseData:ICountryData[]=[];
  filteredCountryWiseData:ICountryData[];

  continentList:string[]=[
    'North America','South America','Europe','Africa','Asia','Antartica','Oceania'
  ];

  unwantedList:string[]=[
    '','Total:','World'
  ];

  _listFilter: string = '';

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCountryWiseData= this._listFilter?this.performFilter(this._listFilter):this.countryWiseData;
  }

  pageTitle:string='Confirmed Cases and Deaths by Country, Territory, or Conveyance';

  constructor(private coronavirusDataService: CoronavirusDataService) { }

  ngOnInit(): void {
    this.getCountryWiseCoronavirusData(this.continentList,this.unwantedList);
  }

  getCountryWiseCoronavirusData(continentList:string[],unwantedList:string[]){
    this.coronavirusDataService.getCountryWiseCoronavirusData().subscribe(
      data=>{
        this.countryWiseData=data.filter(function(d){
          return !continentList.includes(d.country)
        });
        this.countryWiseData=this.countryWiseData.filter(
          function(e){
            return !unwantedList.includes(e.country)
        });
        this.filteredCountryWiseData=this.countryWiseData;
      }
    )
  }

  performFilter(filterBy:string):ICountryData[]{
    filterBy= filterBy.toLocaleLowerCase();
    return this.countryWiseData.filter((country:ICountryData)=>
    country.country.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }


}
