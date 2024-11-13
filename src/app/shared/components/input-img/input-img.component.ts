import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../../functions/toBase64';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-img',
  standalone: true,
  imports: [NgIf,
    MatButtonModule
  ],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {
  @Input({ required: true }) title!: string;
  imageBase64?: string;

  @Output()
  selectedFile = new EventEmitter();

  change(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      toBase64(file)
        .then((value: string) => this.imageBase64 = value)
        .catch(error => console.log(error));

      this.selectedFile.emit(file);
    }
  }
}
