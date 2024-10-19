import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diplome } from '../model/diplome';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  
  addDipURL : string;
  getDipURL : string;
  updateDipUrl : string;
  deleteDipUrl : string;

  constructor(private http : HttpClient) {

    this.addDipURL = 'http://localhost:9091/dip/addDiplome';
    this.getDipURL = 'http://localhost:9091/dip/getAll';
    this.updateDipUrl = 'http://localhost:9091/dip/updateDiplome';
    this.deleteDipUrl = 'http://localhost:9091/dip/deleteDiplomeById';

   }

   addDiplome(dip: Diplome): Observable<Diplome> {
     return this.http.post<Diplome>(this.addDipURL,dip);
   }

   getAllDiplome(): Observable<Diplome[]>{
     return this.http.get<Diplome[]>(this.getDipURL);
   }

   updateDiplome(dip :Diplome) : Observable<Diplome>{
     return this.http.put<Diplome>(this.updateDipUrl, dip);
   }

   deleteDiplome(dip: Diplome) : Observable<Diplome> {
     return this.http.delete<Diplome>(this.deleteDipUrl+'/'+dip.id);
   }
  
}
