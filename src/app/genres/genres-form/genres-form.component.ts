import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { firstLetterShouldBeUppercase } from '../../shared/functions/validations';
import { GenresCreationDTO } from '../genres.models';

@Component({
  selector: 'app-genres-form',
  standalone: true,
  imports: [MatError, RouterLink, MatButtonModule, MatInput, ReactiveFormsModule, MatButton, MatIcon, MatFormField, MatLabel],
  templateUrl: './genres-form.component.html',
  styleUrl: './genres-form.component.css'
})
export class GenresFormComponent {



  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required, firstLetterShouldBeUppercase()] }]
  });

  @Output() postForm = new EventEmitter<GenresCreationDTO>();

  saveChanges() {

    const genre = this.form.value as GenresCreationDTO;
    this.postForm.emit(genre);

  }
  getErrorMessageForName(): string {
    let field = this.form.controls.name;
    if (field.hasError('required')) {
      return 'Name field is required'
    }
    if (field.hasError('firstLetterShouldBeUppercase')) {
      return field.getError('firstLetterShouldBeUppercase').message;
    }
    return "";
  }



}
