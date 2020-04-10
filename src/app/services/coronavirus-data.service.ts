import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IGlobalData } from '../interfaces/iglobal-data';
import {tap,catchError} from 'rxjs/operators';
import { ICountryData } from '../interfaces/icountry-data';

@Injectable({
  providedIn: 'root'
})
export class CoronavirusDataService {

  private globalDataurl='https://coronavirus-19-api.herokuapp.com/all';

  private countryWiseUrl='https://coronavirus-19-api.herokuapp.com/countries';

  constructor(private http:HttpClient) { }

  getGlobalCoronavirusData():Observable<IGlobalData>{

    return this.http.get<IGlobalData>(this.globalDataurl).pipe(
      tap(data=>console.log('All: '+JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  getCountryWiseCoronavirusData():Observable<ICountryData[]>{

    return this.http.get<ICountryData[]>(this.countryWiseUrl).pipe(
      catchError(this.handleError)
    );

  }

  getCountry(id:string){
    return this.http.get(this.countryWiseUrl+'/'+id);
  }



  private handleError(err: HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
        errorMessage=`An error occured: ${err.error.message}`;
    }else{
        errorMessage=`Server returned code: ${err.status},error message is ${err.message}`;
    }
    return throwError(errorMessage);

  }
}
