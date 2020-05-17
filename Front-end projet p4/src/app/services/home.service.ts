import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getProduits() {

    return this.http.get("https://localhost:44385/api/produits/1");

  }
}
