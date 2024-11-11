import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';
import { GenresCreationDTO, GenresDTO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
  selector: 'app-edit-genre',
  standalone: true,
  imports: [GenresFormComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  model: GenresDTO = { id: 1, name: 'Action' };

  saveChanges(genre: GenresCreationDTO) {
    console.log('editing the genre', genre);
  }
}
