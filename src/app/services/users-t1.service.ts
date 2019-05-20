import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersT1Service implements OnInit {
  apiData = ajax('https://picsum.photos/v2/list').pipe(
    retry(3), // Retry up to 3 times before failing
    map(res => {
      if (!res.response) {
        throw new Error('Value expected!');
      }
      return res.response;
    }),
    catchError(err => of([]))
  );

  constructor(private _http: HttpClient) {
  }

  public getAllUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users/');
  }

  public getListImg() {
    return this._http.get('https://picsum.photos/v2/list');
  }

  public getRandomImg() {
    return this.apiData.subscribe(list => {
      const length = Object.keys(list).length;
      const randomNum = Math.floor(Math.random() * length);
      return list[randomNum].download_url;
    });
  }

  ngOnInit(): void {

  }
}
