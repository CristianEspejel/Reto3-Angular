import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.model';

@Component({
  selector: 'mas-populares',
  templateUrl: './mas-populares.component.html',
  styleUrls: ['./mas-populares.component.scss']
})
export class MasPopularesComponent implements OnInit {
  cardsData: Card[] = [];

  constructor() {}

  ngOnInit() {}

  handleCardsLoaded(cards: Card[]) {
    this.cardsData = cards;
  }


}

