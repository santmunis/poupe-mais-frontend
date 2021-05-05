import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IObjective } from '../objective/Models/objective.models';

@Injectable({
  providedIn: 'root',
})
export class ObjectiveService {
  constructor(private _http: HttpClient) {}

  public getObjective(id: string): Observable<any> {
    return this._http.get(`${environment.apiUrl}/objectives`);
  }

  public createObjective(objective: IObjective): Observable<any> {
    return this._http.post(`${environment.apiUrl}/objectives`, objective);
  }

  public updateObjective(objective: IObjective): Observable<any> {
    return this._http.put(`${environment.apiUrl}/objectives`, {
      name: objective.name,
      quantity: objective.quantity,
      already_placed: objective.already_placed,
      objective_id: objective.id,
    });
  }
}
