import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nationnalite } from '../model/nationnalite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationnaliteService {

  addNatURL : string;
  getNatURL : string;
  updateNatUrl : string;
  deleteNatUrl : string;

  constructor(private http : HttpClient
    ) {

    this.addNatURL = 'http://localhost:9091/nat/addNationnalite';
    this.getNatURL = 'http://localhost:9091/nat/getAll';
    this.updateNatUrl = 'http://localhost:9091/nat/updateNationnalite';
    this.deleteNatUrl = 'http://localhost:9091/nat/deleteNationnaliteById';

   }

   addNationnalite(nat: Nationnalite): Observable<Nationnalite> {
     return this.http.post<Nationnalite>(this.addNatURL,nat);
   }

   getAllNationnalite(): Observable<Nationnalite[]>{
     return this.http.get<Nationnalite[]>(this.getNatURL);
   }

   updateNationnalite(nat:Nationnalite) : Observable<Nationnalite>{
     return this.http.put<Nationnalite>(this.updateNatUrl, nat);
   }

   deleteNationnalite(nat: Nationnalite) : Observable<Nationnalite> {
     return this.http.delete<Nationnalite>(this.deleteNatUrl+'/'+nat.id);
   }
  
}
