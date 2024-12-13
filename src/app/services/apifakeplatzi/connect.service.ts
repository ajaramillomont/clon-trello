import { HttpClient} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from '../../models/product.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  //hacemos una inyección de dependencias
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) { }

  geProducts(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
