import { IPost2Send } from './../model/model-interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';


import { catchError, retry, shareReplay, tap } from 'rxjs/operators';
import { IPage, IPost } from '../model/model-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/post';

  onCheck = new EventEmitter<any>();

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    }
    return throwError(errorMessage);
  }

  getPage(rpp: number, page: number): Observable<IPage> {
    return this.http.get<IPage>(this.sURL + "?rpp=" + rpp + "&page=" + page, httpOptions);
  }

  getOne(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.sURL + "?id=" + id, httpOptions);
  }

  newOne(oPost: IPost2Send): Observable<number> {
    return this.http.post<number>(this.sURL, oPost, httpOptions);
  }

}
