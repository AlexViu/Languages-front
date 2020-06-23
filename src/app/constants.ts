import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
    public static API_URL: String = 'http://192.168.1.9:8000/api/';

    public static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Referrer-Policy': ''
        })
      };
 }

 