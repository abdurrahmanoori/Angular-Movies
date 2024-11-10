import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
  @Input({ transform: numberAttribute })
  id!: number;
}


