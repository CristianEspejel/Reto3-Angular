import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Output() cardsLoaded: EventEmitter<Card[]> = new EventEmitter<Card[]>();



  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Card[]>('assets/cards.json').subscribe(data => {
      this.cards = data;
      this.cardsLoaded.emit(this.cards); // Emitir el evento cardsLoaded con el arreglo de tarjetas
    });
  }
}
