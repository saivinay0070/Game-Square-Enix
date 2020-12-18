import { Component, Input, OnInit } from '@angular/core';
import { gamesDescription } from '../models/gameDescription';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {

// passing the data from GameCardsComponent(parent to child)

  @Input() data: gamesDescription;

  games_description: gamesDescription;
  constructor() { }

  ngOnInit() {
    this.games_description = this.data
  }

}
