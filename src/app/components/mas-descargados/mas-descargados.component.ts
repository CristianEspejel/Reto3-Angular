import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-mas-descargados',
  templateUrl: './mas-descargados.component.html',
  styleUrls: ['./mas-descargados.component.scss']
})
export class MasDescargadosComponent implements OnInit {
  cardsData: Card[] = [];
  filteredCards: Card[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Card[]>('assets/cards.json').subscribe(data => {
      this.cardsData = data;
      this.filterCards();
    });
  }

  filterCards() {
    this.filteredCards = this.cardsData.filter(card => card.downloads > 100);
  }
}
