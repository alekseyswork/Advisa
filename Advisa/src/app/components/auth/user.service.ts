import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';
import 'rxjs';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  api: String = 'http://localhost:3000/api';
  headers: Headers = new Headers({
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
  });
  /**
   *
   */
  constructor(private http: Http) { }
  signup(user: User) {
    try {
      const body = this.JsonToUser(user);

      return this
        .http
        .post(this.api + '/user/signup', body, { headers: this.headers })
        .map((response: Response) => response.json());
    } catch (error) {
      Observable.throw(error.json());
    }
  }

  signin(user: User) {
    try {
      const body = this.JsonToUser(user);
      return this
        .http
        .post(this.api + '/user/signin', body, { headers: this.headers })
        .map((response: Response) => response.json());
    } catch (error) {
      Observable.throw(error.json());
    }
  }
  private JsonToUser(user: User) {
    return JSON.stringify(user);
  }
  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
