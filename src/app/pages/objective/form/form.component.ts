import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObjectiveService } from '../../services/objective.service';
import { IObjective } from '../Models/objective.models';

@Component({
  selector: 'app-form-objective',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() submit: EventEmitter<IObjective> = new EventEmitter();
  public objective: IObjective = {
    name: '',
    quantity: 1,
  };
  constructor(private _objectiveService: ObjectiveService) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm): void {
    const objective: IObjective = { ...form.value };
    this._objectiveService.createObjective(objective).subscribe((response) => {
      this.submit.emit(response);
    });
  }
}
