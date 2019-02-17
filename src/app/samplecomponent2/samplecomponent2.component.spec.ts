import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samplecomponent2Component } from './samplecomponent2.component';

describe('Samplecomponent2Component', () => {
  let component: Samplecomponent2Component;
  let fixture: ComponentFixture<Samplecomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samplecomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samplecomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
