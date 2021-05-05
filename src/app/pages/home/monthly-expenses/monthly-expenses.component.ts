import { Component, Input, OnInit } from '@angular/core';
import { isNil } from 'lodash';
import { Transaction } from '../transaction/Models/transaction.models';

@Component({
  selector: 'app-monthly-expenses',
  templateUrl: './monthly-expenses.component.html',
  styleUrls: ['./monthly-expenses.component.scss'],
})
export class MonthlyExpensesComponent implements OnInit {
  public _transactions: Transaction[];
  @Input()
  public get transactions(): Transaction[] {
    return this._transactions;
  }
  public set transactions(value: Transaction[]) {
    if (!isNil(value)) {
      this._transactions = value.filter((data: Transaction): boolean => {
        const now: Date = new Date();

        return data.created_at.getMonth() === now.getMonth();
      });
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
