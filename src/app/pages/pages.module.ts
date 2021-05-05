import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: no-relative-imports
import { HomeModule } from './home/home.module';
import { ObjectiveModule } from './objective/objective.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, ObjectiveModule, UserModule],
})
export class PagesModule {}
