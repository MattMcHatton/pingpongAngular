import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Match } from 'src/app/Match';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css'],
})
export class MatchItemComponent implements OnInit {
  @Input() match!: Match;
  @Output() onDeleteMatch: EventEmitter<Match> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(match: Match): void {
    this.onDeleteMatch.emit(match);
    console.log(match);
  }
}
