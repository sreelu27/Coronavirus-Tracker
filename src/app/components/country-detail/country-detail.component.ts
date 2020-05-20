import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoronavirusDataService } from 'src/app/services/coronavirus-data.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  public specificCountry;
  id:string='';

  constructor(private route: ActivatedRoute,private coronavirusDataService:CoronavirusDataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCountryFromName(this.id);  
  }

  getCountryFromName(id:string){
    this.coronavirusDataService.getCountry(id).subscribe(
      data=>{
        this.specificCountry = data; 
      },
      err => console.error(err),
      ()=>console.log('Specific Country Details Loaded')
    );
  }

}
