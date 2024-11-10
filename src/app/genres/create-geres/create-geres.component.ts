import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-geres',
  standalone: true,
  imports: [MatButton, MatIcon],
  templateUrl: './create-geres.component.html',
  styleUrl: './create-geres.component.css'
})
export class CreateGeresComponent {
  rount = inject(Router);

  saveChanges() {
    this.rount.navigate(['/genres']);
  }


}
