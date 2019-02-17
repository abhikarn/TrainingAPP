import { Component, OnInit } from '@angular/core';
import { SharedService, Employee } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private shared: SharedService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employeeList = this.activatedRoute.snapshot.data.list;
  }

  goBack() {
    this.router.navigate(['']);
  }

}
