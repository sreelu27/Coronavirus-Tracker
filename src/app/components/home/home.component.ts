import { Component, OnInit } from '@angular/core';
import { CoronavirusDataService } from 'src/app/services/coronavirus-data.service';
import { IGlobalData } from 'src/app/interfaces/iglobal-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle = 'COVID-19 CORONAVIRUS PANDEMIC';

  public globalData:IGlobalData;
  

  constructor(private coronavirusDataService: CoronavirusDataService) { }

  ngOnInit(): void {
    this.getCoronavirusGlobalData();
  }

  getCoronavirusGlobalData(){
    this.coronavirusDataService.getGlobalCoronavirusData().subscribe(
      data=>{
        this.globalData=data;
      }
    );
  }

}
