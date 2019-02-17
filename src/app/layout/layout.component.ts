import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  mydata = '';
  constructor(private msg: MessageService) { }

  ngOnInit() {
    this.msg.messageData.subscribe((data: string) => {
      alert('i m from layout');
      this.mydata = data;
    });
  }

}
