import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLoggedSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() { }

  login(loginForm: User): Observable<User> {
    this.setUserLogged(loginForm);
    return of({ username: loginForm.username, token: "123456" });
    // return this.http.post<User>("login", JSON .stringify(loginForm));
  }

  setUserLogged(user: User | null) {
    this.userLoggedSubject$.next(user);
  }

  getUserLogged(): Observable<User | null>{
    return this.userLoggedSubject$.asObservable();
  }

  isLoggedIn(): boolean {
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false;
  }

  getUserToken(): string | null {
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null;
  }

  getUsername(): string | null {
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.username : null;
  }

  logout() {
    this.setUserLogged(null);
  }

}

