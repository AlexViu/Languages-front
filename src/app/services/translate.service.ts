import { Injectable } from '@angular/core';
import { TableTranslateItem } from 'app/pages/translate/table-translate/table-translate-datasource';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSettings } from 'app/constants';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  getTranslates() : Observable<TableTranslateItem[]> {
    return this.http.get<TableTranslateItem[]>(`${AppSettings.API_URL}translation`)
    .pipe(
      catchError(this.handleError<TableTranslateItem[]>('getHeroes', []))
    );
  }

  addTranslate(translate:any): Observable<any> {
    console.log(JSON.stringify(translate));
    return this.http.post<any>(`${AppSettings.API_URL}translation`, translate, AppSettings.httpOptions, )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  editTranslate(translate:any): Observable<any> {
    return this.http.put<any>(`${AppSettings.API_URL}translation`, translate, AppSettings.httpOptions )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  deleteTranslate(translate:any): Observable<any> {
    return this.http.put<any>(`${AppSettings.API_URL}deleteTranslation`, translate, AppSettings.httpOptions)
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  autoTranslate(translate:any): Observable<any> {
    return this.http.post<any>(`${AppSettings.API_URL}autoTranslate`, translate, AppSettings.httpOptions, )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  download() : Observable<any> {
    console.log(`${AppSettings.API_URL}download`);

    return this.http.get<any>(`${AppSettings.API_URL}download`)
    .pipe(
      catchError(this.handleError<any>('getHeroes', []))
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
