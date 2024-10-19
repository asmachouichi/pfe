import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:9091/api/notification';

  constructor(private http: HttpClient) {}

  sendNotification(message: string): Observable<any> {
    return this.http.post(this.baseUrl, message);
  }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
