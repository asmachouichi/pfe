import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matiere } from '../model/matiere';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  addMatURL : string;
  getMatURL : string;
  updateMatUrl : string;
  deleteMatUrl : string;

  constructor(private http : HttpClient) {

    this.addMatURL = 'http://localhost:9091/mat/addMatiere';
    this.getMatURL = 'http://localhost:9091/mat/getAll';
    this.updateMatUrl = 'http://localhost:9091/mat/updateMatiere';
    this.deleteMatUrl = 'http://localhost:9091/mat/deleteMatiereById';

   }

   addMatiere(mat: Matiere): Observable<Matiere> {
     return this.http.post<Matiere>(this.addMatURL,mat);
   }

   getAllMatiere(): Observable<Matiere[]>{
     return this.http.get<Matiere[]>(this.getMatURL);
   }

   updateMatiere(mat:Matiere) : Observable<Matiere>{
     return this.http.put<Matiere>(this.updateMatUrl, mat);
   }

   deleteMatiere(mat: Matiere) : Observable<Matiere> {
     return this.http.delete<Matiere>(this.deleteMatUrl+'/'+mat.id);
   }
  
}
