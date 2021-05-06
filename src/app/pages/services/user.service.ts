import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../user/new-user/user.models';
import { isNil } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: IUser;
  constructor(private _http: HttpClient) {}

  public createUser(user: IUser): Observable<any> {
    return this._http.post(`${environment.apiUrl}/users`, user);
  }
  public loginUser(email: string, password: string): Observable<any> {
    return this._http.post(`${environment.apiUrl}/auth/login`, {
      email,
      password,
    });
  }

  public async getUser() {
    await this._http
      .get(`${environment.apiUrl}/users`)
      .toPromise()
      .then((response) => {
        this.user = response as IUser;
      });
  }

  public userIsPremium(): boolean {
    return (
      !isNil(this.user) &&
      !isNil(this.user.subscription) &&
      this.user.subscription.name === 'Premium'
    );
  }

  public getUserInformation(): IUser {
    return this.user;
  }
}
