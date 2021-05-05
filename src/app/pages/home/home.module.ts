import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TransactionModule } from './transaction/transaction.module';
import { HomeRoutingModule } from './home.routing.module';
import { ChartModule } from './chart/chart.module';
import { MonthlyExpensesModule } from './monthly-expenses/monthly-expenses.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TransactionModule,
    HomeRoutingModule,
    ChartModule,
    MonthlyExpensesModule,
  ],
})
export class HomeModule {}
