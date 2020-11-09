import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Socket } from 'phoenix';
import { catchError, tap } from 'rxjs/operators';
import { Microscope } from './microscope';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicroscopeService {
  constructor(private http: HttpClient) {
    this.websocket();
  }

  websocket(): void {
    const socket = new Socket(environment.wsUrl);
    const channel = socket.channel('events', {});

    socket.connect();
    channel.join();
    channel.on('new', event => console.log(event));
  }

  getMicroscope(id: number): Observable<Microscope[]> {
    return this.http.get<Microscope[]>(`${environment.apiBaseUrl}/${id}`)
      .pipe(
        tap(data => console.log('Microscope: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMicroscopeList(): Observable<Microscope[]> {
    return this.http.get<Microscope[]>(environment.apiBaseUrl)
      .pipe(
        tap(data => console.log('Microscopes: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
