import {User} from './user.model';
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {catchError} from 'rxjs/operators';
import 'rxjs';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  /**
   *
   */
  constructor(private http: Http) {}
  signup(user: User) {
    try {
      const body = JSON.stringify(user);
      const headers = new Headers({
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Content-Type': 'application/json',
    });
      return this
        .http
        .post('http://localhost:3000/user', body, {headers: headers})
        .map((response: Response) => response.json());
    } catch (error) {
      Observable.throw(error.json());
    }
  }

    // signin(user : User) {
    //   const body = JSON.stringify(user);
    //   const headers = new Headers({'Content-Type': 'application/json'});
    //   return this
    //     .http
    //     .post('http://localhost:3000/user/signin', body, {headers: headers})
    //     .map((response : Response) => response.json())
    //     .catch((error : Response) => {
    //       return Observable.throw(error.json());
    //     });
    // }

    logout() {
      localStorage.clear();
    }

    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
  }
