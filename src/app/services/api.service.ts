import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL= 'https://www.themealdb.com/api/json/v1/1/categories.php ';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(this.apiURL + '/categories/').pipe(
      retry(3)
    );
  }

}
