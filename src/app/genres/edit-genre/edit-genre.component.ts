import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';

@Component({
  selector: 'app-edit-genre',
  standalone: true,
  imports: [],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {

  @Input({ transform: numberAttribute })
  id!: number;
}