import { Component, Input, OnInit } from '@angular/core';
import { gamesDescription } from '../models/gameDescription';

@Component({
  selector: 'app-game-image',
  templateUrl: './game-image.component.html',
  styleUrls: ['./game-image.component.css']
})
export class GameImageComponent implements OnInit {

  @Input() gameImage: string;
  game_image: string;
  constructor() { }

  ngOnInit() {
    this.game_image =  this.gameImage 
  }

}
