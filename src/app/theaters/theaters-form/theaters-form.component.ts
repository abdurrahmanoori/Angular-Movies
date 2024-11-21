import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';
import { MapComponent } from "../../shared/compontents/map/map-component";
import { Coordinate } from '../../shared/compontents/map/Coordinate.models';

@Component({
  selector: 'app-theaters-form',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule, MapComponent],
  templateUrl: './theaters-form.component.html',
  styleUrl: './theaters-form.component.css'
})
export class TheatersFormComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    coodintate: new FormControl<Coordinate | null>(null, { validators: [Validators.required] })
  });

  @Input()
  model?: TheaterDTO;

  @Output()
  postForm = new EventEmitter<TheaterCreationDTO>();

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

  handCoordinateSelection(coordinate: Coordinate) {
    this.form.controls.coodintate.setValue(coordinate);
  }

  saveChanges(): void {

    const theater = this.form.value as TheaterCreationDTO;;

    this.postForm.emit(theater);
  }

}
