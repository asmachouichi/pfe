import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificat } from '../model/certificat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {
  addCerURL : string;
  getCerURL : string;
  updateCerUrl : string;
  deleteCerUrl : string;

  constructor(private http : HttpClient) {

    this.addCerURL = 'http://localhost:9091/cer/addCertificat';
    this.getCerURL = 'http://localhost:9091/cer/getAll';
    this.updateCerUrl = 'http://localhost:9091/cer/updateCertificat';
    this.deleteCerUrl = 'http://localhost:9091/cer/deleteCertificatById';

   }

   addCertificat(cer: Certificat): Observable<Certificat> {
     return this.http.post<Certificat>(this.addCerURL,cer);
   }

   getAllCertificat(): Observable<Certificat[]>{
     return this.http.get<Certificat[]>(this.getCerURL);
   }

   updateCertificat(cer :Certificat) : Observable<Certificat>{
     return this.http.put<Certificat>(this.updateCerUrl, cer);
   }

   deleteCertificat(cer: Certificat) : Observable<Certificat> {
     return this.http.delete<Certificat>(this.deleteCerUrl+'/'+cer.id);
   }
  
}


