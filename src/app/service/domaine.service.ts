import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domaine } from '../model/domaine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  addDomURL : string;
  getDomURL : string;
  updateDomUrl : string;
  deleteDomUrl : string;

  constructor(private http : HttpClient) {

    this.addDomURL = 'http://localhost:9091/dom/addDomaine';
    this.getDomURL = 'http://localhost:9091/dom/getAll';
    this.updateDomUrl = 'http://localhost:9091/dom/updateDomaine';
    this.deleteDomUrl = 'http://localhost:9091/dom/deleteDomaineById';

   }

   addDomaine(dom : Domaine): Observable<Domaine> {
     return this.http.post<Domaine>(this.addDomURL,dom);
   }

   getAllDomaine(): Observable<Domaine[]>{
     return this.http.get<Domaine[]>(this.getDomURL);
   }

   updateDomaine(dom :Domaine) : Observable<Domaine>{
     return this.http.put<Domaine>(this.updateDomUrl,dom);
   }

   deleteDomaine(dom : Domaine) : Observable<Domaine> {
     return this.http.delete<Domaine>(this.deleteDomUrl+'/'+dom.id);
   }
}
