import { Component } from '@angular/core';
import { MoveisListComponent } from "../movies/moveis-list/moveis-list.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MoveisListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  inTheaterMovies?: any[];
  upCommingReleaseMovies?: any[];

  constructor() {
    setTimeout(() => {
      this.inTheaterMovies = [{
        title: "spider man",
        releaseDate: new Date(),
        Price: 100,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uOE4y3y6sflKds0y5YGpA-gwMvd91IgUeQ&s"
      }, {
        title: "Darkan",
        releaseDate: new Date("2000-2-2"),
        Price: 500,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2CpkT8o4B7jMifn0ZmWWhO6gZh_3SnbYUw&s"
      }]
      this.upCommingReleaseMovies = [{
        title: "Darkan",
        releaseDate: new Date("2000-2-2"),
        Price: 500,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGz90Kj6j-qp_yDBmZ5zHRW9XQJZaYge_cng&s"
      }
        , {
        title: "Darkan",
        releaseDate: new Date("2000-2-2"),
        Price: 500,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlC3J637_Pt9fKW4yjh7MNwCRTm5PJxrXZDw&s"
      }]
    }, 200);
  }


}
