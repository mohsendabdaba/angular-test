import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PartiesServiceService {


  constructor(private http: HttpClient) { }


  liste_soirees (): Observable<any> {
    return this.http.get('../../assets/parties.json')
      .pipe(
        tap(soiree => {
          console.log(soiree,'rrrrrrrr')
          return soiree;
        
        }),

      );
  }
}
