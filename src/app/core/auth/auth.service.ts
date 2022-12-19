import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServer = 'http://localhost:8080/api/auth/login';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {

  }

  private userLoggedSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  login(loginForm: User): Observable<User> {
    return this.http.post<{ 'jwt-token': string }>(this.apiServer, JSON.stringify(loginForm), this.httpOptions).pipe(
      map(res => {
        return { username: loginForm.username, token: res['jwt-token'] }
      })
    );
  }

  setUserLogged(user: User | null) {
    let apiRolesInfo = 'http://localhost:8080/api/utente/rolesInfo';
    this.userLoggedSubject$.next(user);
    this.http.get<string[]>(apiRolesInfo, this.httpOptions).subscribe(rolesItem => user!.roles = rolesItem);
    this.userLoggedSubject$.next(user);
  }

  getUserLogged(): Observable<User | null> {
    return this.userLoggedSubject$.asObservable();
  }

  isLoggedIn(): boolean {
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false;
  }

  isAdmin(): boolean {
    if(this.userLoggedSubject$.value?.roles?.includes("ROLE_ADMIN"))
      return true;
    else
      return false;
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

