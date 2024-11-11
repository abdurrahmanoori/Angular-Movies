import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GenresCreationDTO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
  selector: 'app-create-geres',
  standalone: true,
  imports: [GenresFormComponent],
  templateUrl: './create-geres.component.html',
  styleUrl: './create-geres.component.css'
})

export class CreateGeresComponent {

  router = inject(Router);



  saveChanges(genre: GenresCreationDTO) {
    console.log(genre);
    this.router.navigate(['/genres']);

  }
}
