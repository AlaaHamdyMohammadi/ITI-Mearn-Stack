import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  allowNewSave = false;
  createStatus = 'No something created !';
  statusName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewSave = true;
    }, 2000);
  }
  onCreateStatus() {
    this.createStatus = `Status was created ! Name is ${this.statusName}`;
  }
  onUpdateStatus(event: any) {
    console.log(event);
    this.statusName = (<HTMLInputElement>event.target).value;
  }

  username: string = '';
}
