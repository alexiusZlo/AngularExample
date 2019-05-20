import {Component, OnInit} from '@angular/core';
import {UsersT1Service} from '../../services/users-t1.service';

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

  ngOnInit() {
    this._usersService.getAllUsers().subscribe(users => this.users = users);
    console.log(this._usersService.getRandomImg());
  }
}
