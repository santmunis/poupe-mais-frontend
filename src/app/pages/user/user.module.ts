import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [UserComponent, LoginComponent, NewUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    FormsModule,
    RouterModule,
  ],
})
export class UserModule {}
