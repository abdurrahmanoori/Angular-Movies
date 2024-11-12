import { Component, EventEmitter, inject, Input, model, OnInit, Output } from "@angular/core"
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActorCreationDTO, ActorDTO } from "../actors.models";
import { ActorsFormComponent } from "../actors-form/actors-form.component";


@Component({
  selector: 'app-create-actor',
  standalone: true,
  imports: [ActorsFormComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {

  saveChanges(actor: ActorCreationDTO) {
    console.log('creating the actor: ', actor);
  }
}
