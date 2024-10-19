
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Inscreption } from '../model/inscreption';

@Injectable({
  providedIn: 'root'
})
export class InscreptionService {

 
  
 
    addInsURL : string;
    getInsURL : string;
    updateInsUrl : string;
    deleteInsUrl : string;
  
    constructor(private http : HttpClient) {
  
      this.addInsURL = 'http://localhost:9091/ins/addInscreption';
      this.getInsURL = 'http://localhost:9091/ins/getAll';
      this.updateInsUrl = 'http://localhost:9091/ins/updateInscreption';
      this.deleteInsUrl = 'http://localhost:9091/ins/deleteInscreptionById';
  
     }
     getAllName(): Observable<string[]> {
      // Code pour obtenir la liste des noms
      return this.http.get<string[]>(this.getInsURL);
    }
     addInscreption(ins : Inscreption): Observable<Inscreption> {
       return this.http.post<Inscreption>(this.addInsURL,ins);
     }
  
     getAllInscreption(): Observable<Inscreption[]>{
       return this.http.get<Inscreption[]>(this.getInsURL);
     }
  
     updateInscreption(ins :Inscreption) : Observable<Inscreption>{
       return this.http.put<Inscreption>(this.updateInsUrl, ins);
     }
  
     deleteInscreption(ins: Inscreption) : Observable<Inscreption> {
       return this.http.delete<Inscreption>(this.deleteInsUrl+'/'+ins.id);
     }
    
  
  }
