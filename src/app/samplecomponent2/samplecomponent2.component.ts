import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-samplecomponent2',
  templateUrl: './samplecomponent2.component.html',
  styleUrls: ['./samplecomponent2.component.css']
})
export class Samplecomponent2Component implements OnInit {
  @Input() input1 = '';
  @Output() output1 = new EventEmitter<string>();
  passedValue = 'this is from child component';
  constructor() { }

  ngOnInit() {
  }
  clickMe() {
    this.output1.emit(this.passedValue);
  }
}
