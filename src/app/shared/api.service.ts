import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add player
  AddPlayer(data: Player): Observable<any> {
    let API_URL = `${this.endpoint}/add-player`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all player
  GetPlayer() {
    return this.http.get(`${this.endpoint}`);
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}