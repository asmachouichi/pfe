import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teste } from '../model/teste';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  addTesURL : string;
  getTesURL : string;
  updateTesUrl : string;
  deleteTesUrl : string;

  constructor(private http : HttpClient) {

    this.addTesURL = 'http://localhost:9091/tes/addTeste';
    this.getTesURL = 'http://localhost:9091/tes/getAll';
    this.updateTesUrl = 'http://localhost:9091/tes/updateTeste';
    this.deleteTesUrl = 'http://localhost:9091/tes/deleteTesteById';

   }

   addTeste(tes:Teste): Observable<Teste> {
     return this.http.post<Teste>(this.addTesURL,tes);
   }

   getAllTeste(): Observable<Teste[]>{
     return this.http.get<Teste[]>(this.getTesURL);
   }

   updateTeste(tes :Teste) : Observable<Teste>{
     return this.http.put<Teste>(this.updateTesUrl, tes);
   }

   deleteTeste(tes: Teste) : Observable<Teste> {
     return this.http.delete<Teste>(this.deleteTesUrl+'/'+tes.id);
   }
}



