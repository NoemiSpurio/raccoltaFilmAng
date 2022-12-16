import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root' // abbiamo bisogno che sia condiviso e inizializzato all'avvio dell'applicazione
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {

    if(this.authService.isLoggedIn()){
      return true;
    } else {
      this.router.navigateByUrl("login");
      return false;
    }
  }

}
