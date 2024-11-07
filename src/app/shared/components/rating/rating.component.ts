import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
ngOnInit(): void {
  this.maxRatingArray = Array(this.maxRating).fill(0)

}

@Input({required: true})
maxRating!:number;

maxRatingArray: any[]=[];
}
