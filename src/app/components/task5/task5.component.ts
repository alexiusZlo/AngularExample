import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component implements OnInit {
  nameControl: FormControl;
  disOptionsSelect: Array<any>;
  fullFormcontrol: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.fullFormcontrol = new FormGroup({
      name: new FormControl('', [Validators.minLength(2)]),
      surname: new FormControl('', [Validators.minLength(2)]),
      gender: new FormControl('', [Validators.required]),
      birthday: new FormControl(),
      email: new FormControl()
    });

  }

}
