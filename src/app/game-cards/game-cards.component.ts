import { Component, OnInit } from '@angular/core';
import { gamesDescription } from '../models/gameDescription';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {
  games: gamesDescription;

  constructor(private rest: RestService,) { }


  ngOnInit() {
    
    this.retrevingData()

  }


  // intializing the data
  retrevingData() {
    this.rest.getCall().subscribe(data => {
     return  this.games = data.results;
    })
  }



}
