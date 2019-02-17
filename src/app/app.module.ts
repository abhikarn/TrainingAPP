import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { AppRoutingModule } from './app.routing.module';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { Samplecomponent2Component } from './samplecomponent2/samplecomponent2.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomDirectiveDirective } from '../custom-directive.directive';
import { CustomPipePipe } from '../custom-pipe.pipe';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    Samplecomponent2Component,
    EmployeeFormComponent,
    EmployeeListComponent,
    CustomDirectiveDirective,
    CustomPipePipe,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
