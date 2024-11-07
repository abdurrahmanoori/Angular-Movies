import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIcon,NgClass],
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

@Input()
seletedRating = 0;
clickRating = 0;
handleMouseEnter(index:number){
  this.seletedRating = index+1;
}

handleMouseLeave(){
  if(this.clickRating !==0){
    this.seletedRating = this.clickRating;
  }else{
    this.seletedRating = 0;
  }
}


handleClick(index:number){
  this.seletedRating = index +1;
  this.clickRating = this.seletedRating; 
}

}
