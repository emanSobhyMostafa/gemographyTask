import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRepoData(curPage: number = 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('sort', 'stars');
    params = params.append('order', 'desc');
    params = params.append('page', `${curPage}`);
    params = params.append('per_page', '100');

    var reposUrl =
      `https://api.github.com/search/repositories?q=created:>2017-10-22`


    return this.http.get<any>(reposUrl, { params: params })

  }
}
