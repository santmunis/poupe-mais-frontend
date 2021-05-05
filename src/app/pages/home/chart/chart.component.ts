import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { Transaction } from '../transaction/Models/transaction.models';
import { groupBy, clone, Dictionary, sumBy, isNil } from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  private _transaction: Transaction[];
  @Input() public get transactions(): Transaction[] {
    return this._transaction;
  }
  public set transactions(value: Transaction[]) {
    this._transaction = value;
    if (!isNil(this._transaction)) {
      const data = this.getTransctionsAsDataChart(this._transaction);
      this.generateChart(data);
    }
  }
  public labels: String[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  constructor() {}

  ngOnInit(): void {}

  public getTransctionsAsDataChart(transactionsBd: Transaction[]) {
    let dataEntrance = [];
    let datawithdraw = [];

    const transactions: Transaction[] = clone(transactionsBd);
    transactions.forEach(
      (transaction: Transaction): Date =>
        (transaction.created_at = new Date(transaction.created_at))
    );

    const filterFunction: Function = (
      data: Transaction[],
      field: string
    ): Transaction[] => {
      return data.filter(
        (transaction: Transaction): boolean => transaction.type === field
      );
    };
    const DictionaryFunction: Function = (
      data: Transaction[]
    ): Dictionary<Transaction[]> => {
      return groupBy(data, (t: Transaction): Number => t.created_at.getMonth());
    };

    const sumValues = (data: Dictionary<Transaction[]>): number[] => {
      const numberArray: number[] = [];
      for (const key in data) {
        numberArray.push(sumBy(data[key], 'value'));
      }

      return numberArray;
    };

    const entraceArr: Transaction[] = filterFunction(transactions, 'entrace');
    const withdrawArr: Transaction[] = filterFunction(transactions, 'withdraw');

    const entranceGroup: Dictionary<Transaction[]> = DictionaryFunction(
      entraceArr
    );
    const withdrawGroup: Dictionary<Transaction[]> = DictionaryFunction(
      withdrawArr
    );

    datawithdraw = sumValues(withdrawGroup).map(
      (value: number): number => value * -1
    );
    dataEntrance = sumValues(entranceGroup);

    return {
      labels: this.labels,
      datasets: [
        {
          label: 'Receita',
          data: dataEntrance,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1,
        },
        {
          label: 'Gastos',
          data: datawithdraw,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1,
        },
      ],
    };
  }

  public generateChart(data: any) {
    const chart: Chart = new Chart('myChart', {
      type: 'bar',
      data: data,
      options: {
        interaction: {
          intersect: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            stacked: true,
          },
          x: {
            stacked: true,
          },
        },
      },
    });
  }
}
