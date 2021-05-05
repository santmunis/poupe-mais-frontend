import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNil } from 'lodash';
import { UserService } from '../../services/user.service';
import { IObjective } from '../Models/objective.models';
import { DialogFactoryService } from './../../../shared/dialog/dialog-factory.service';
import { DialogService } from './../../../shared/dialog/dialog.service';
import { DialogData } from './../../../shared/dialog/models/dialog-data.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() public objectives: IObjective[];
  public dialog: DialogService;
  @ViewChild('createObjective', { static: true })
  createObjectiveDialogTemplate: TemplateRef<any>;
  constructor(
    private dialogFactoryService: DialogFactoryService,
    private _userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public dispatchDialog() {
    if (this.objectives.length >= 1 && !this._userService.userIsPremium()) {
      this._snackBar.open(
        'Ops.. só usuários premiuns podem ter mais de um objetivo',
        'Suave'
      );
    } else {
      this.openDialog({
        headerText: 'Adicione um objetivo',
        template: this.createObjectiveDialogTemplate,
      });
    }
  }

  private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData, {
      width: 720,
      disableClose: false,
    });
  }

  public closeAndUpdate(event: IObjective) {
    if (!isNil(event.quantity)) {
      this.objectives.push(event);
      this.dialog.close();
    }
  }
}
