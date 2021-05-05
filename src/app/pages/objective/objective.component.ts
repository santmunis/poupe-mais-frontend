import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DialogFactoryService } from 'src/app/shared/dialog/dialog-factory.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { DialogData } from 'src/app/shared/dialog/models/dialog-data.model';
import { ObjectiveService } from '../services/objective.service';
import { IObjective } from './Models/objective.models';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss'],
})
export class ObjectiveComponent implements OnInit {
  public objectives: IObjective[] = [];
  public objective: IObjective;
  public dialog: DialogService;

  @ViewChild('createObjective', { static: true })
  createObjectiveDialogTemplate: TemplateRef<any>;
  constructor(
    private _objectiveService: ObjectiveService,
    private dialogFactoryService: DialogFactoryService
  ) {}

  ngOnInit(): void {
    this.getAllObjectives();
  }

  public getAllObjectives(): void {
    this._objectiveService
      .getObjective('1')
      .subscribe((response: IObjective[]): void => {
        this.objectives = response;
      });
  }

  public dispatchDialog(updateObjective: IObjective) {
    this.objective = updateObjective;
    this.openDialog({
      headerText: 'Adicione Saldo',
      template: this.createObjectiveDialogTemplate,
    });
  }

  private openDialog(dialogData: DialogData): void {
    this.dialog = this.dialogFactoryService.open(dialogData, {
      width: 720,
      disableClose: false,
    });
  }

  public closeAndUpdate(form: NgForm) {
    this._objectiveService
      .updateObjective(this.objective)
      .subscribe((response) => {
        this.dialog.close();
      });
  }
}
