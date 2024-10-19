import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  addEtuURL : string;
  getEtuURL : string;
  updateEtuUrl : string;
  deleteEtuUrl : string;

  constructor(private http : HttpClient) {

    this.addEtuURL = 'http://localhost:9091/etu/addEtudiant';
    this.getEtuURL = 'http://localhost:9091/etu/getAll';
    this.updateEtuUrl = 'http://localhost:9091/etu/updateEtudiant';
    this.deleteEtuUrl = 'http://localhost:9091/etu/deleteEtudiantById';

   }

   addEtudiant(etu : Etudiant): Observable<Etudiant> {
     return this.http.post<Etudiant>(this.addEtuURL,etu);
   }

   getAllEtudiant(): Observable<Etudiant[]>{
     return this.http.get<Etudiant[]>(this.getEtuURL);
   }

   updateEtudiant(etu :Etudiant) : Observable<Etudiant>{
     return this.http.put<Etudiant>(this.updateEtuUrl, etu);
   }

   deleteEtudiant(etu : Etudiant) : Observable<Etudiant> {
     return this.http.delete<Etudiant>(this.deleteEtuUrl+'/'+etu.id);
   }
}


