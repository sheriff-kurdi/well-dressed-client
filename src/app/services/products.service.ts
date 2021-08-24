import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "https://localhost:5001/api/Products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .toPromise()
      .then(data => { return data; });
  }


}
