import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
// import { Component, input } from '@angular/core';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-moveis-list',
  standalone: true,
  imports: [NgIf,NgOptimizedImage,CurrencyPipe,UpperCasePipe,DatePipe,NgFor],
  templateUrl: './moveis-list.component.html',
  styleUrl: './moveis-list.component.css'
})
export class MoveisListComponent {
  @Input({ required: true }) 
  movies?: any[];  
  // movies?: any[];
}
