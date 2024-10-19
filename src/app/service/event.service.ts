import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  addEveURL : string;
  getEveURL : string;
  deleteEveUrl : string;
  updateEveUrl : string;

  constructor(private http : HttpClient) {

    this. addEveURL = 'http://localhost:9091/eve/addEvent';
    this.getEveURL = 'http://localhost:9091/eve/getAll';
    this.deleteEveUrl = 'http://localhost:9091/eve/deleteEventById';
    
    this.updateEveUrl = 'http://localhost:9091/eve/updateEvent';
   }
  
   
  
  
   addEvent(eve: Event): Observable<Event> {
     return this.http.post<Event>(this.addEveURL,eve);
   }

   getAllEvent(): Observable<Event[]>{
     return this.http.get<Event[]>(this.getEveURL);
   }
  
   updateEvent(eve :Event) : Observable<Event>{
    return this.http.put<Event>(this.updateEveUrl, eve);
  }
   deleteEvent(eve: Event) : Observable<Event> {
    return this.http.delete<Event>(this.deleteEveUrl+'/'+eve.id);
  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:9091/eve/getByEventId/${id}`);
}
  

}