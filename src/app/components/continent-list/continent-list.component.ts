import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from 'src/app/services/coronavirus-data.service';
import { ICountryData } from 'src/app/interfaces/icountry-data';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.css']
})
export class ContinentListComponent implements OnInit {

  continentList:string[]=[
    'North America','South America','Europe','Africa','Asia','Antartica','Oceania'
  ];

  unwantedList:string[]=[
    '','Total:','World'
  ];

  continentWiseData:ICountryData[]=[];

  pageTitle:string='Confirmed Cases and Deaths by Continent';

  constructor(private coronavirusDataService:CoronavirusDataService) { }

  ngOnInit(): void {
    this.getContinentWiseCoronavirusData(this.continentList,this.unwantedList);
  }

  getContinentWiseCoronavirusData(continentList:string[],unwantedList:string[]){

    this.coronavirusDataService.getCountryWiseCoronavirusData().subscribe(
      data=>{
        this.continentWiseData=data.filter(function(d){
          return continentList.includes(d.country)
        });
        this.continentWiseData=this.continentWiseData.filter(
          function(e){
            return !unwantedList.includes(e.country)
        });
      }
    )

  }

}
