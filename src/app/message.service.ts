import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageData = new Subject();
  constructor() {

  }

  pushData(data: string) {
    this.messageData.next(data);
  }
}
