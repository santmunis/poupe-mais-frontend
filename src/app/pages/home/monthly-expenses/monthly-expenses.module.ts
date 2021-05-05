import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyExpensesComponent } from './monthly-expenses.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MonthlyExpensesComponent, CardComponent],
  imports: [CommonModule],
  exports: [MonthlyExpensesComponent],
})
export class MonthlyExpensesModule {}
