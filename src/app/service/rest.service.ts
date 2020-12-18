import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

 
  constructor(private http: HttpClient) { 
  }

   getCall() {
   return this.http.get<any>('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132')
  }
 
}
