import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private apiURL = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getProductDetails(id: any) : Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
