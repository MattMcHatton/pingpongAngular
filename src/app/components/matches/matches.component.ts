import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Match } from 'src/app/Match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
    });
  }

  deleteMatch(match: Match) {
    this.matchService.deleteMatch(match).subscribe((m: Match) => {
      this.matches = this.matches.filter((m) => m.id !== match.id);
    });
  }
}
