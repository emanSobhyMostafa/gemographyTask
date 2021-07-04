import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRepoData(curPage: number = 1): Observable<any> {
    var reposUrl =
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${curPage}&per_page=100`


    return this.http.get<any>(reposUrl)

  }
}
