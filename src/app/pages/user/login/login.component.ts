import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ILogin } from './Models/login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: ILogin = { name: '', password: '' };
  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this._userService
      .loginUser(this.login.name, this.login.password)
      .subscribe((response) => {
        localStorage.setItem('token', response['access_token']);
        this._userService.getUser();
        this._router.navigate(['home']);
      });
  }
}
