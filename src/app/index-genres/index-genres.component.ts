import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-genres',
  standalone: true,
  imports: [MatIcon, RouterLink, MatButton],
  templateUrl: './index-genres.component.html',
  styleUrl: './index-genres.component.css'
})
export class IndexGenresComponent {

}
