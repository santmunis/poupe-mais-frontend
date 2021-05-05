import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
// tslint:disable-next-line: no-implicit-dependencies tslint:disable-next-line: no-submodule-imports
import { ProgressBarModule } from 'src/app/shared/progress-bar/progress-bar.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ProgressBarModule, MatIconModule],
  exports: [CardComponent],
})
export class CardModule {}
