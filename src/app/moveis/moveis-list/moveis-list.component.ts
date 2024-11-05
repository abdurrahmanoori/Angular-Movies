import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moveis-list',
  standalone: true,
  imports: [NgIf,NgOptimizedImage,CurrencyPipe,UpperCasePipe,DatePipe,NgFor],
  templateUrl: './moveis-list.component.html',
  styleUrl: './moveis-list.component.css'
})
export class MoveisListComponent {
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
