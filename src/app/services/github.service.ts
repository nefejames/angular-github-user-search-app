import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLIENT_ID, CLIENT_SECRET } from 'src/credentials';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  baseUrl = 'https://api.github.com/users';

  CLIENT_ID = CLIENT_ID;
  CLIENT_SECRET = CLIENT_SECRET;

  constructor(private http: HttpClient) {}

  //get user's GitHub profile
  public getProfile(searchQuery: string): Observable<{}> {
    const url = `${this.baseUrl}/${searchQuery}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`;

    return this.http.get<{}>(url);
  }
}
