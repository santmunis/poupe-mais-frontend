import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule, MdePopoverModule, MatCardModule],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
