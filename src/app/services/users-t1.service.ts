import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersT1Service implements OnInit {

  constructor(private _http: HttpClient) {
  }

  public getAllUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users/');
  }

  public getListImg() {
    return this._http.get('https://picsum.photos/v2/list');
  }

  public getRandomImg() {
    return this.getListImg().subscribe(list => {
      const length = Object.keys(list).length;
      const randomNum = Math.floor(Math.random() * length);
      return list[randomNum].download_url;
    });
  }

  ngOnInit(): void {

  }
}
