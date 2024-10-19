import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ensiegnant } from '../model/ensiegnant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnsiegnantService {

 
  
 
    addEnsURL : string;
    getEnsURL : string;
    updateEnsUrl : string;
    deleteEnsUrl : string;
  
    constructor(private http : HttpClient) {
  
      this.addEnsURL = 'http://localhost:9091/ens/addEnsiegnant';
      this.getEnsURL = 'http://localhost:9091/ens/getAll';
      this.updateEnsUrl = 'http://localhost:9091/ens/updateEnsiegnant';
      this.deleteEnsUrl = 'http://localhost:9091/ens/deleteEnsiegnantById';
  
     }
  
     addEnsiegnant(ens : Ensiegnant): Observable<Ensiegnant> {
       return this.http.post<Ensiegnant>(this.addEnsURL,ens);
     }
  
     getAllEnsiegnant(): Observable<Ensiegnant[]>{
       return this.http.get<Ensiegnant[]>(this.getEnsURL);
     }
  
     updateEnsiegnant(ens :Ensiegnant) : Observable<Ensiegnant>{
       return this.http.put<Ensiegnant>(this.updateEnsUrl, ens);
     }
  
     deleteEnsiegnant(ens: Ensiegnant) : Observable<Ensiegnant> {
       return this.http.delete<Ensiegnant>(this.deleteEnsUrl+'/'+ens.id);
     }
    
  
  }
