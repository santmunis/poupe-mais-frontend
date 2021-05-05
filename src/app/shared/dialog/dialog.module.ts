import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { DialogFactoryService } from './dialog-factory.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GenericDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [GenericDialogComponent],
  providers: [DialogFactoryService],
  entryComponents: [GenericDialogComponent],
})
export class DialogModule {}
