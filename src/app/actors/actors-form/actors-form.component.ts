import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Component, OnInit, inject, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActorDTO, ActorCreationDTO } from '../actors.models';
import { MatButtonModule } from '@angular/material/button';
import { dateCannotBeInTheFuture } from '../../shared/functions/validations';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-actors-form',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule, InputImgComponent],
  // imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, RouterModule, MatDatepickerModule, MatFormFieldModule],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    dateOfBirth: new FormControl<Date | null>
      (null, { validators: [Validators.required, dateCannotBeInTheFuture()] })
  });

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  getErrorMessageForName(): string {
    let field = this.form.controls.name;
    if (field.hasError('required')) {
      return "The name field is required";
    }
    return '';
  }

  getErrorMessageForDateOfBirth(): string {
    let field = this.form.controls.dateOfBirth;
    if (field.hasError('required')) {
      return "The date of birth field is required";
    }

    if (field.hasError('dateCannotBeInTheFuture')) {
      return field.getError('dateCannotBeInTheFuture').message;
    }
    return '';
  }


  saveChanges(): void {

    const actor = this.form.value as ActorCreationDTO;
    this.postForm.emit(actor);
  }
}
