import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { Samplecomponent2Component } from './samplecomponent2/samplecomponent2.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedService, Employee } from './shared.service';
@Injectable({
    providedIn: 'root'
})
export class ListResolver implements Resolve<any> {
    constructor(private shared: SharedService) {

    }
    resolve() {
        return JSON.parse(window.localStorage.getItem('employeeList'));
    }

}
const routes: Routes = [
    { path: '', component: EmployeeFormComponent },
    {
        path: 'list', component: EmployeeListComponent,
        resolve: {
            list: ListResolver
        }
    },
    { path: 'sample2', component: Samplecomponent2Component },
    { path: '**', component: Samplecomponent2Component },
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
