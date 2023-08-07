import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  // styleUrls: ['./first-component.component.css'],
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class FirstComponentComponent {
  allowNewSave = false;
  createStatus = 'No something created !';
  statusName = '';
  statusCreated = false;
  status: string = 'offline';
  username: string = '';
  user: string = '';
  serverId:number = 10;
  isParagrahgVisible = false;
  log: number[] = [];
  constructor() {
    setTimeout(() => {
      this.allowNewSave = true;
    }, 2000);
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
  onCreateStatus() {
    this.statusCreated = true;
    this.createStatus = `Status was created ! Name is ${this.statusName}`;
  }
  onUpdateStatus(event: any) {
    console.log(event);
    this.statusName = (<HTMLInputElement>event.target).value;
  }
  getServerStatus() {
    return this.status;
  }
  getColor() {
    return this.status === 'online' ? 'green' : 'red'
  }
  onToggleDetails(){
    this.isParagrahgVisible =! this.isParagrahgVisible;
    this.log.push(this.log.length + 1);
  }
}
