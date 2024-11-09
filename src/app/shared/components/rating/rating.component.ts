import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input({ required: true, transform: (value: number) => Array(value).fill(0) })
  maxRating!: any;



  @Input()
  seletedRating = 0;

  @Output()
  rated = new EventEmitter<number>();

  clickRating = 0;
  handleMouseEnter(index: number) {
    this.seletedRating = index + 1;
  }

  handleMouseLeave() {
    if (this.clickRating !== 0) {
      this.seletedRating = this.clickRating;
    } else {
      this.seletedRating = 0;
    }
  }


  handleClick(index: number) {
    this.seletedRating = index + 1;
    this.clickRating = this.seletedRating;
    this.rated.emit(this.seletedRating);
  }

}
