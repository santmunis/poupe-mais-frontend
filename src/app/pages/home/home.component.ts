import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from './transaction/Models/transaction.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public transactions: Transaction[];
  constructor(private _transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  public getTransactions(): void {
    this._transactionService
      .getTransactionByUserId('1')
      .subscribe((response: Transaction[]): void => {
        this.transactions = response;
      });
  }
}
