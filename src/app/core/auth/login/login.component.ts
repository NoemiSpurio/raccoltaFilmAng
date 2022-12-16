import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

// per il controllo della pw
// pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  utente: User = { username: "", password: "", token: "" };
  errorMessage: string = '';
  destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    if (loginForm.valid)
      //this.router.navigate(['welcome']);
      this.authService.login(loginForm.value).pipe(takeUntil(this.destroy$)).subscribe(res => 
      { 
        this.authService.setUserLogged(res);
        this.router.navigateByUrl("welcome");
       });
    else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

}
