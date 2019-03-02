import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  mydata = '';
  subscription: Subscription;
  constructor(private msg: MessageService) { }

  ngOnInit() {
    if(!!this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.msg.messageData.subscribe((data: string) => {
      alert('i m from layout');
      this.mydata = data;
    });
  }

}
