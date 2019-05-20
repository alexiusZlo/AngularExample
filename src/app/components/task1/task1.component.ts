import {Component, OnInit} from '@angular/core';
import {UsersT1Service} from '../../services/users-t1.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  public users;
  public userImg;

  // tslint:disable-next-line:variable-name
  constructor(public _usersService: UsersT1Service) {
  }

  getRandom(list) {
    const length = Object.keys(list).length;
    const randomNum = Math.floor(Math.random() * length);
    console.log(list[randomNum].download_url);
    return this.userImg = list[randomNum].download_url;
  }

  getImg(target) {
    target.src = this.userImg = this._usersService.getListImg().subscribe(list => {
      this.getRandom(list);
    });
  }

  ngOnInit() {
    this._usersService.getAllUsers().subscribe(users => this.users = users);
    this.userImg = this._usersService.getListImg().subscribe(list => {
      this.getRandom(list);
    });
  }
}
