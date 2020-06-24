import { Injectable } from '@angular/core';
import { TableContainerItem } from 'app/pages/container/table-container/table-container-datasource';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSettings } from 'app/constants';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient) { }

  getContainer() : Observable<TableContainerItem[]> {
    return this.http.get<TableContainerItem[]>(`${AppSettings.API_URL}container`)
    .pipe(
      catchError(this.handleError<TableContainerItem[]>('getHeroes', []))
    );
  }

  addContainer(container:TableContainerItem): Observable<TableContainerItem> {
    return this.http.post<TableContainerItem>(`${AppSettings.API_URL}container`, container, AppSettings.httpOptions, )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  editContainer(container:TableContainerItem): Observable<TableContainerItem> {
    return this.http.put<TableContainerItem>(`${AppSettings.API_URL}container/${container.id}`, container, AppSettings.httpOptions, )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  deleteLanguage(containerid: number): Observable<boolean> {
    return this.http.delete<boolean>(`${AppSettings.API_URL}container/${containerid}`)
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
