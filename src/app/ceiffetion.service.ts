import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ceiffetion } from './ceiffetion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeiffetionService {

  addCeiURL : string;
  getCeiURL : string;
  updateCeiUrl : string;
  deleteCeiUrl : string;

  constructor(private http : HttpClient) {

    this.addCeiURL = 'http://localhost:9091/cei/addCeiffetion';
    this.getCeiURL = 'http://localhost:9091/cei/getAll';
    this.updateCeiUrl = 'http://localhost:9091/cei/updateCeiffetion';
    this.deleteCeiUrl = 'http://localhost:9091/cei/deleteCeiffetionById';

   }

   addCeiffetion(cei : Ceiffetion): Observable<Ceiffetion> {
     return this.http.post<Ceiffetion>(this.addCeiURL,cei);
   }

   getAllCeiffetion(): Observable<Ceiffetion[]>{
     return this.http.get<Ceiffetion[]>(this.getCeiURL);
   }

   updateCeiffetion(cei :Ceiffetion) : Observable<Ceiffetion>{
     return this.http.put<Ceiffetion>(this.updateCeiUrl, cei);
   }

   deleteCeiffetion(cei : Ceiffetion) : Observable< Ceiffetion> {
     return this.http.delete< Ceiffetion>(this.deleteCeiUrl+'/'+cei.id);
   }
}



