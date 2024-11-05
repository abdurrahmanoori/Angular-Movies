import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoveisListComponent } from "./moveis/moveis-list/moveis-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf, MoveisListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  

}
