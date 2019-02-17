import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {
  value1 = 'ParentInput';
  constructor() { }

  ngOnInit() {
  }

  callChild(event) {
    this.value1 = event;
  }
}
