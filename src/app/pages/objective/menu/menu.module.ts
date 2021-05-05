import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { DialogModule } from '../../../shared/dialog/dialog.module';
import { FormObjectiveModule } from './../form/form.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, DialogModule, FormObjectiveModule, MatSnackBarModule],
  exports: [MenuComponent],
})
export class MenuModule {}
