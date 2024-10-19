import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specielite } from '../model/specielite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieliteService {

  addSpeURL : string;
  getSpeURL : string;
  updateSpeUrl : string;
  deleteSpeUrl : string;

  constructor(private http : HttpClient) {

    this.addSpeURL = 'http://localhost:9091/spe/addSpecielite';
    this.getSpeURL = 'http://localhost:9091/spe/getAll';
    this.updateSpeUrl = 'http://localhost:9091/spe/updateSpecielite';
    this.deleteSpeUrl = 'http://localhost:9091/spe/deleteSpecieliteById';

   }

   addSpecielite(spe:Specielite): Observable<Specielite> {
     return this.http.post<Specielite>(this.addSpeURL,spe);
   }

   getAllSpecielite(): Observable<Specielite[]>{
     return this.http.get<Specielite[]>(this.getSpeURL);
   }

   updateSpecielite(spe :Specielite) : Observable<Specielite>{
     return this.http.put<Specielite>(this.updateSpeUrl, spe);
   }

   deleteSpecielite(spe: Specielite) : Observable<Specielite> {
     return this.http.delete<Specielite>(this.deleteSpeUrl+'/'+spe.id);
   }
}

