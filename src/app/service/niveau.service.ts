import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Niveau } from '../model/niveau';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  
  addNivURL : string;
  getNivURL : string;
  updateNivUrl : string;
  deleteNivUrl : string;

  constructor(private http : HttpClient) {

    this.addNivURL = 'http://localhost:9091/niv/addNiveau';
    this.getNivURL = 'http://localhost:9091/niv/getAll';
    this.updateNivUrl = 'http://localhost:9091/niv/updateNiveau';
    this.deleteNivUrl = 'http://localhost:9091/niv/deleteNiveauById';

   }

   addNiveau(niv:Niveau): Observable<Niveau> {
     return this.http.post<Niveau>(this.addNivURL,niv);
   }

   getAllNiveau(): Observable<Niveau[]>{
     return this.http.get<Niveau[]>(this.getNivURL);
   }

   updateNiveau(niv :Niveau) : Observable<Niveau>{
     return this.http.put<Niveau>(this.updateNivUrl, niv);
   }

   deleteNiveau(niv: Niveau) : Observable<Niveau> {
     return this.http.delete<Niveau>(this.deleteNivUrl+'/'+niv.id);
   }
}
