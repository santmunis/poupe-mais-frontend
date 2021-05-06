import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/pages/services/user.service';
import { IUser } from 'src/app/pages/user/new-user/user.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public user: IUser;
  constructor(private _route: Router, private _userService: UserService) {}

  ngOnInit(): void {
    this.user = this._userService.getUserInformation();
  }

  public logout() {
    localStorage.clear();
    this._route.navigate(['page/user/login']);
  }
}
