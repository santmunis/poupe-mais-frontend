import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveComponent } from './objective.component';
import { MonthlyExponsesRoutingModule } from './objective.routing.module';
import { MenuModule } from './menu/menu.module';
import { CardModule } from './card/card.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ObjectiveComponent],
  imports: [
    CommonModule,
    MonthlyExponsesRoutingModule,
    MenuModule,
    CardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ObjectiveModule {}
