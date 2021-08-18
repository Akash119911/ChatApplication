import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatappService {

  // baseURL : string = "http://localhost:3000/chatapp/addFiles"

  constructor(private http : HttpClient) { }

  addFiles(data:any){
    return this.http.post('http://localhost:3000/chatapp/addFiles', data);
  }

  public getAllFiles(){
    return this.http.get('http://localhost:3000/chatapp/getAllFiles');
  }

  // getBlobThumbNail(): Observable<Blob>{
  //   const headers = new HttpHeaders({
  //     'Content-Type' : 'application/json',
  //     'Accept' : 'application/json'
  //   })
  //   return this.http.get<Blob>('http://localhost:3000/chatapp/getAllFiles',
  //   {
  //     headers : headers, responseType : 'blob' as 'json'
  //   })
  // }
}
