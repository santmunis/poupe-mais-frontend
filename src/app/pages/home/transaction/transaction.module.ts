import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from 'src/app/shared/dialog/dialog.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DialogModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [TransactionComponent],
})
export class TransactionModule {}
