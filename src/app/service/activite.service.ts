import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activite } from '../model/activite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  addActURL : string;
  getActURL : string;
  updateActUrl : string;
  deleteActUrl : string;

  constructor(private http : HttpClient
    ) {

    this.addActURL = 'http://localhost:9091/act/addActivite';
    this.getActURL = 'http://localhost:9091/act/getAll';
    this.updateActUrl = 'http://localhost:9091/act/updateActivite';
    this.deleteActUrl = 'http://localhost:9091/act/deleteActiviteById';

   }

   addActivite(act: Activite): Observable<Activite> {
     return this.http.post<Activite>(this.addActURL,act);
   }

   getAllActivite(): Observable<Activite[]>{
     return this.http.get<Activite[]>(this.getActURL);
   }

   updateActivite(act:Activite) : Observable<Activite>{
     return this.http.put<Activite>(this.updateActUrl, act);
   }

   deleteActivite(act: Activite) : Observable<Activite> {
     return this.http.delete<Activite>(this.deleteActUrl+'/'+act.id);
   }
  
}
