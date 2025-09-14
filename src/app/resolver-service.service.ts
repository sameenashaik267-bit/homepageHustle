import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverServiceService implements Resolve<any> {
 
  constructor(private http:HttpClient, private route:ActivatedRoute) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('https://fakestoreapi.com/products/'+route.params['id']);
  }
  }

