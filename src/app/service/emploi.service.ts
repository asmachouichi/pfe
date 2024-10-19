
import { Injectable } from '@angular/core';
import { Emploi } from '../model/emploi';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {


  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this. addEmpURL = 'http://localhost:9091/emp/addEmploi';
    this.getEmpURL = 'http://localhost:9091/emp/getAll';
    this. updateEmpUrl = 'http://localhost:9091/emp/updateEmploi';
    this.deleteEmpUrl = 'http://localhost:9091/emp/deleteEmploiById';
    
   }

   addEmploi(emp: Emploi): Observable<Emploi> {
     return this.http.post<Emploi>(this.addEmpURL,emp);
   }

   getAllEmploi(): Observable<Emploi[]>{
     return this.http.get<Emploi[]>(this.getEmpURL);
   }
  
   updateEmploi(emp :Emploi) : Observable<Emploi>{
    return this.http.put<Emploi>(this.updateEmpUrl,emp);
  }

   deleteEmploi(emp: Emploi) : Observable<Emploi> {
     return this.http.delete<Emploi>(this.deleteEmpUrl+'/'+emp.id);
   }
   getEmploiById(id: number): Observable<Emploi> {
    return this.http.get<Emploi>(`http://localhost:9091/emp/getEmploiByID/${id}`);
}
}
