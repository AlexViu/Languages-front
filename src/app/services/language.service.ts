import { Injectable } from '@angular/core';
import { TableLanguageItem } from 'app/pages/language/table-language/table-language-datasource';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSettings } from 'app/constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor( private http: HttpClient) {}

  getLanguages() : Observable<TableLanguageItem[]> {
    return this.http.get<TableLanguageItem[]>(`${AppSettings.API_URL}language`)
    .pipe(
      catchError(this.handleError<TableLanguageItem[]>('getHeroes', []))
    );
  }


  addLanguage(language:TableLanguageItem): Observable<TableLanguageItem> {
    return this.http.post<TableLanguageItem>(`${AppSettings.API_URL}language`, language, AppSettings.httpOptions, )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  editLanguage(language:TableLanguageItem): Observable<TableLanguageItem> {
    return this.http.put<TableLanguageItem>(`${AppSettings.API_URL}language/${language.id}`, language, AppSettings.httpOptions, )
      .pipe(
        catchError(this.handleError('addHero', name))
      );
  }

  deleteLanguage(languageid: number): Observable<boolean> {
    return this.http.delete<boolean>(`${AppSettings.API_URL}language/${languageid}`)
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
