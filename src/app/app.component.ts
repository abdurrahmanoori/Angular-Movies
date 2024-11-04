import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,CurrencyPipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  movies = [{
    title: "spider man",
    releaseDate: new Date(),
    Price:100
  },{
  title: "Darkan",
  releaseDate: new Date("2000-2-2"),
  Price:500
  }
]
  dublicateNumber(value: number):number{
    return value*2;

  }
}
