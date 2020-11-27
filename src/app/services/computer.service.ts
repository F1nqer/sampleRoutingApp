import { Inject, Injectable } from '@angular/core';
import { Computer } from '../shared/computer';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  constructor(private httpClient: HttpClient,
              @Inject('baseURL') private baseURL) { }

  getComputers(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.baseURL + 'computers')
      .pipe(catchError(this.handleError));
  }

  getComputerById(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.baseURL + 'computers/' + id.toString())
      .pipe(catchError(this.handleError));
  }

  putComputer(updatedComputer: Computer): Observable<Computer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application-json'
      })
    };

    return this.httpClient.put<Computer>(this.baseURL + 'computers/' + updatedComputer.id.toString(),
      updatedComputer, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any): Observable<never> {
    let errMsg: string;

    if (error.error instanceof ErrorEvent){
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${JSON.stringify(error.error)}`;
    }

    return throwError(errMsg);
  }
}
