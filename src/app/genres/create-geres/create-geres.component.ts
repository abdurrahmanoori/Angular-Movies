import { Component, inject, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-geres',
  standalone: true,
  imports: [MatError, RouterLink, MatButtonModule, MatInput, ReactiveFormsModule, MatButton, MatIcon, MatFormField, MatLabel],
  templateUrl: './create-geres.component.html',
  styleUrl: './create-geres.component.css'
})
export class CreateGeresComponent {
  router = inject(Router);
  private formBuilder = inject(FormBuilder);



  form = this.formBuilder.group({
    name: ['', Validators.required]
  });


  saveChanges() {
    this.router.navigate(['/genres']);
    console.log(this.form.value);

  }
  getErrorMessageForName(): string {
    let field = this.form.controls.name;
    if (field.hasError('required')) {
      return 'Name field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is requiredName field is required';
    }

    return "";
  }

}
