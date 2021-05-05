import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from './Models/transaction.models';
import { DialogFactoryService } from './../../../shared/dialog/dialog-factory.service';
import { DialogService } from './../../../shared/dialog/dialog.service';
import { DialogData } from './../../../shared/dialog/models/dialog-data.model';
import { isNil } from 'lodash';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  @Input() public transactions: Transaction[];
  public transaction: Transaction = {
    name: '',
    description: '',
    type: 'ENTRACE',
    value: 0,
    tag_id: '2fd29786-540b-4d39-9751-9a1f3dfb80be',
  };
  public dialog: DialogService;

  @ViewChild('addTransaction', { static: true })
  addTransactionDialogTemplate: TemplateRef<any>;

  constructor(
    private dialogFactoryService: DialogFactoryService,
    private _transactionsService: TransactionService
  ) {}

  public dispatchDialog() {
    this.openDialog({
      headerText: 'Adicione um objetivo',
      template: this.addTransactionDialogTemplate,
    });
  }

  private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData, {
      width: 720,
      disableClose: false,
    });
  }

  public onSubmit() {
    this._transactionsService
      .addTransaction(this.transaction)
      .subscribe((response) => {
        this.transactions.push(response);
        this.dialog.close();
      });
  }
}
