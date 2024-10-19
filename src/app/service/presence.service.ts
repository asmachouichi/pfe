import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presence } from '../model/presence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  addPreURL : string;
  getPreURL : string;
  updatePreUrl : string;
  deletePreUrl : string;

  constructor(private http : HttpClient) {

    this.addPreURL = 'http://localhost:9091/pre/addPresence';
    this.getPreURL = 'http://localhost:9091/pre/getAll';
    this.updatePreUrl = 'http://localhost:9091/pre/updatePresence';
    this.deletePreUrl = 'http://localhost:9091/pre/deletePresenceById';

   }

   addPresence(pre: Presence): Observable<Presence> {
     return this.http.post<Presence>(this.addPreURL,pre);
   }

   getAllPresnce(): Observable<Presence[]>{
     return this.http.get<Presence[]>(this.getPreURL);
   }

   updatePresence(pre:Presence) : Observable<Presence>{
     return this.http.put<Presence>(this.updatePreUrl, pre);
   }

   deletePresence(pre: Presence) : Observable<Presence> {
     return this.http.delete<Presence>(this.deletePreUrl+'/'+pre.id);
   }
  
}
