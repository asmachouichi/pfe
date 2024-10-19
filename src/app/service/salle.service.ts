
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from '../model/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

 
  addSalURL : string;
  getSalURL : string;
  updateSalUrl : string;
  deleteSalUrl : string;

  constructor(private http : HttpClient) {

    this.addSalURL = 'http://localhost:9091/sal/addSalle';
    this.getSalURL = 'http://localhost:9091/sal/getAll';
    this.updateSalUrl = 'http://localhost:9091/sal/updateSalle';
    this.deleteSalUrl = 'http://localhost:9091/sal/deleteSalleById';

   }

   addSalle(sal: Salle): Observable<Salle> {
     return this.http.post<Salle>(this.addSalURL,sal);
   }

   getAllSalle(): Observable<Salle[]>{
     return this.http.get<Salle[]>(this.getSalURL);
   }

   updateSalle(sal:Salle) : Observable<Salle>{
     return this.http.put<Salle>(this.updateSalUrl, sal);
   }

   deleteSalle(sal: Salle) : Observable<Salle> {
     return this.http.delete<Salle>(this.deleteSalUrl+'/'+sal.id);
   }
  
}
