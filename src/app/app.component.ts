import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  movies?: any[];
  constructor() {
    setTimeout(() => {
      this.movies = [{
        title: "spider man",
        releaseDate: new Date(),
        Price: 100,
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/288px-Cidade_Maravilhosa.jpg"
      }, {
        title: "Darkan",
        releaseDate: new Date("2000-2-2"),
        Price: 500,
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Maracan%C3%A3_2014_g.jpg/1024px-Maracan%C3%A3_2014_g.jpg"
      }
        , {
        title: "Darkan",
        releaseDate: new Date("2000-2-2"),
        Price: 500,
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Maracan%C3%A3_2014_g.jpg/1024px-Maracan%C3%A3_2014_g.jpg"
      }
        , {
        title: "Darkan",
        releaseDate: new Date("2000-2-2"),
        Price: 500,
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Maracan%C3%A3_2014_g.jpg/1024px-Maracan%C3%A3_2014_g.jpg"
      }]
    }, 3000);
  }

}
