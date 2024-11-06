import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  standalone: true,
  imports: [NgIf, NgFor, NgOptimizedImage, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.css'
})
export class GenericListComponent {

  @Input({ required: true })
  elements: any;
}
