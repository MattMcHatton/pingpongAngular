import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Match } from 'src/app/Match';
import { MATCHES } from '../mock-matches';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrl = 'http://localhost:5000/matches';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl);
  }

  deleteMatch(match: Match): Observable<Match> {
    const url = `${this.apiUrl}/${match.id}`;
    return this.http.delete<Match>(url);
  }
}
