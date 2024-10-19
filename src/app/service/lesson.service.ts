import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../model/lesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  

  addLesURL : string;
  getLesURL : string;
  updateLesUrl : string;
  deleteLesUrl : string;

  constructor(private http : HttpClient) {

    this.addLesURL = 'http://localhost:9091/les/addLesson';
    this.getLesURL = 'http://localhost:9091/les/getAll';
    this.updateLesUrl = 'http://localhost:9091/les/updateLesson';
    this.deleteLesUrl = 'http://localhost:9091/les/deleteLessonById';

   }

   addLesson(les: Lesson): Observable<Lesson> {
     return this.http.post<Lesson>(this.addLesURL,les);
   }

   getAllLesson(): Observable<Lesson[]>{
     return this.http.get<Lesson[]>(this.getLesURL);
   }

   updateLesson(les:Lesson) : Observable<Lesson>{
     return this.http.put<Lesson>(this.updateLesUrl, les);
   }

   deleteLesson(les: Lesson) : Observable<Lesson> {
     return this.http.delete<Lesson>(this.deleteLesUrl+'/'+les.id);
   }
  
}

