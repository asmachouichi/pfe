import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '../model/classe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  addClaURL : string;
  getClaURL : string;
  updateClaUrl : string;
  deleteClaUrl : string;

  constructor(private http : HttpClient) {

    this.addClaURL = 'http://localhost:9091/cla/addClasse';
    this.getClaURL = 'http://localhost:9091/cla/getAll';
    this.updateClaUrl = 'http://localhost:9091/cla/updateClasse';
    this.deleteClaUrl = 'http://localhost:9091/cla/deleteClasseById';

   }

   addClasse(cla: Classe): Observable<Classe> {
     return this.http.post<Classe>(this.addClaURL,cla);
   }

   getAllClasse(): Observable<Classe[]>{
     return this.http.get<Classe[]>(this.getClaURL);
   }

   updateClasse(cla :Classe) : Observable<Classe>{
     return this.http.put<Classe>(this.updateClaUrl, cla);
   }

   deleteClasse(cla: Classe) : Observable<Classe> {
     return this.http.delete<Classe>(this.deleteClaUrl+'/'+cla.id);
   }
 
  
  
}

 
