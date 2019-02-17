import { Component, OnInit } from '@angular/core';
import { SharedService, Employee } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private shared: SharedService, private router: Router) { }
  employee: Employee = {
    firstName:  '',
    lastName:  '',
    address:  ''
  };
  showControl = true;
  ngOnInit() {
  }
  doSave() {
    const employeeList: Employee[] = [];
    employeeList.push(this.employee);
    window.localStorage.setItem('employeeList', JSON.stringify(employeeList));
    // this.shared.employeeList.push(this.employee);
    this.router.navigate(['list']);
  }
}
