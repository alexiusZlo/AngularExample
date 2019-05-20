import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
private log: string[] = [];
  constructor() { }

  add(message: string): void{
    this.log.push(message);
    console.log(message);
  }

}
