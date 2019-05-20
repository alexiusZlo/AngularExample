import {Component, OnInit} from '@angular/core';
import {MailBox} from './mail-box';

const fakeMassagesBody: string[] = [
  'Mauris egestas est augue. Ut sit amet scelerisque massa. Cras suscipit metus consequat, posuere ante nec.',
  'In nisl leo, volutpat vitae rhoncus at, hendrerit ut risus.',
  'Maecenas ut tortor id dui blandit viverra vitae et ipsum. Pellentesque molestie malesuada nulla, vel iaculis orci' +
  'ornare vitae. Vestibulum at felis pellentesque ante viverra lobortis sed a ligula.',
  'Morbi libero lacus, consectetur eget egestas id, egestas ac turpis.',
  'Phasellus auctor risus mollis ligula elementum elementum. In condimentum dolor et urna dapibus varius.'
];

const fakeMessagesAutor: string[] = [
  'Nikola Tesla',
  'Albert Enstain',
  'William Shakespeare',
  'Kim Chen In',
  'Quan Chi',
  'Azino 777',
  'Mom'
];

const fakeMessagesTitle: string[] = [
  'Hey, how are you?',
  'Your credit card was hacked',
  'Free funny videos here!',
  'Test message',
  'Re[18]: Hi!',
  'I have got some very sad news',
  'Black friday, domain sales!'
];

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  public massages: MailBox[] = [];
  private user: string;

  constructor() {
  }

  ngOnInit() {
    this.user = 'John Smith';
    this.onMessagesGenerator();
  }

  private onMessagesGenerator(): void {
    const delay = Math.floor(3 + Math.random() * (5 + 1 - 3)) * 1000;
    const timeout = setTimeout(_ => {
      this.massages.unshift(
        this.getRandomMassage(this.massages.length)
      );

      this.onMessagesGenerator();
      clearTimeout(timeout);
    }, delay);
  }

  private removeMessage(id: number): void {
    this.massages.some((item, index) => {
      if (item.id === id) {
        this.massages.splice(index, 1);
        return true;
      }
      return false;
    });
  }

  private getRandomMassage(id): MailBox {
    return {
      id,
      title: this.getRandomElement(fakeMessagesTitle),
      from: this.getRandomElement(fakeMessagesAutor),
      to: this.user,
      body: this.getRandomElement(fakeMassagesBody),
      time: Date.now()
    };
  }

  private getRandomElement(arr: string[]): string {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
}
