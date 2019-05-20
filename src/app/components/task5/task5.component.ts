import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component implements OnInit {
  nameControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.nameControl = new FormControl('John', [Validators.required, Validators.minLength(5)]);
    this.nameControl.valueChanges
      .subscribe(value => console.log(value));
  }

}
