import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapitre } from '../model/chapitre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  
  addChaURL : string;
  getChaURL : string;
  updateChaUrl : string;
  deleteChaUrl : string;

  constructor(private http : HttpClient) {

    this.addChaURL = 'http://localhost:9091/cha/addChapitre';
    this.getChaURL = 'http://localhost:9091/cha/getAll';
    this.updateChaUrl = 'http://localhost:9091/cha/updateChapitre';
    this.deleteChaUrl = 'http://localhost:9091/cha/deleteChapitreById';

   }

   addChapitre(cha: Chapitre): Observable<Chapitre> {
     return this.http.post<Chapitre>(this.addChaURL,cha);
   }

   getAllChapitre(): Observable<Chapitre[]>{
     return this.http.get<Chapitre[]>(this.getChaURL);
   }

   updateChapitre(cha :Chapitre) : Observable<Chapitre>{
     return this.http.put<Chapitre>(this.updateChaUrl, cha);
   }

   deleteChapitre(cha: Chapitre) : Observable<Chapitre> {
     return this.http.delete<Chapitre>(this.deleteChaUrl+'/'+cha.id);
   }
  
}
