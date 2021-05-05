import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-dialog',
  template: `
  <div mat-dialog-content>
    <p class="dialog-paragraph">{{ data.headerText }}</p>
    <ng-container
      [ngTemplateOutlet]="data.template"
      [ngTemplateOutletContext]="data.context"
    ></ng-container>
  </div>
`,
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent<T> {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headerText: string;
      template: TemplateRef<any>;
      context: T;
    }
  ) {}

}
