import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-actors-form',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, RouterModule, MatDatepickerModule, MatFormFieldModule],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    dateOfBirth: new FormControl<Date | null>(null)
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
      return 'The name field is required';
    }
    return '';
  }

  saveChanges(): void {

    const actor = this.form.value as ActorCreationDTO;
    this.postForm.emit(actor);
  }
}
