import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from '../model/cours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {


 
  addCouURL : string;
  getCouURL : string;
  updateCouUrl : string;
  deleteCouUrl : string;

  constructor(private http : HttpClient) {

    this.addCouURL = 'http://localhost:9091/cou/addCours';
    this.getCouURL = 'http://localhost:9091/cou/getAll';
    this.updateCouUrl = 'http://localhost:9091/cou/updateCours';
    this.deleteCouUrl = 'http://localhost:9091/cou/deleteCoursById';

   }

   addCours(cou: Cours): Observable<Cours> {
     return this.http.post<Cours>(this.addCouURL,cou);
   }

   getAllCours(): Observable<Cours[]>{
     return this.http.get<Cours[]>(this.getCouURL);
   }

   updateCours(cou :Cours) : Observable<Cours>{
     return this.http.put<Cours>(this.updateCouUrl, cou);
   }

   deleteCours(cou: Cours) : Observable<Cours> {
     return this.http.delete<Cours>(this.deleteCouUrl+'/'+cou.id);
   }
  
}
