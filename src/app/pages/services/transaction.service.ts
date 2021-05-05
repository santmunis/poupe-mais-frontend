import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private _http: HttpClient) {}

  public getTransactionByUserId(id: string): Observable<any> {
    return this._http.get(`${environment.apiUrl}/transactions`);
  }

  public addTransaction(transaction: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/transactions`, transaction);
  }
}
