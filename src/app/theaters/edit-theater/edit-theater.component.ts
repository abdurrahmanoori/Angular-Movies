import { Component, Input, numberAttribute } from '@angular/core';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';

@Component({
  selector: 'app-edit-theater',
  standalone: true,
  imports: [TheatersFormComponent],
  templateUrl: './edit-theater.component.html',
  styleUrl: './edit-theater.component.css'
})
export class EditTheaterComponent {
  @Input({ transform: numberAttribute })
  id!: number;
  model: TheaterDTO = { id: 1, name: 'test theater name', latitude: 18.468315102514072, longitdue: -69.95008528232576 };

  saveChanges(theater: TheaterCreationDTO) {
    console.log('editing the theater', theater);
  }


}
