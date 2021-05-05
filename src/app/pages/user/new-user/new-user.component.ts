import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from './user.models';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  public user: IUser = {
    name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.user.confirm_password = this.user.password;
    this._userService
      .createUser(this.user)
      .subscribe(() => this._router.navigate(['page/user/login']));
  }
}
