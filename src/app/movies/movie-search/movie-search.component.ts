import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { GenresDTO } from '../../genres/genres.models';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  });

  genres: GenresDTO[] = [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Drama' }
  ];

  clear() {
    this.form.patchValue({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });
  }

}
