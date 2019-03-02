import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService, Employee } from '../shared.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {

  constructor(private shared: SharedService, private router: Router,
    private msg: MessageService,
    private fb: FormBuilder,
    private http: HttpService) { }
  employee: Employee = {
    firstName: 'A',
    lastName: 'B',
    address: 'C'
  };
  subscription: Subscription;
  employeeForm: FormGroup;
  showControl = true;
  ngOnInit() {
    this.subscription = this.msg.messageData.subscribe((data: string) => {
      alert('i m from form component');
    });
    this.initializeForm();
  }
  private initializeForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['B'],
      address: ['C']
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  doSave() {
    const employeeList: Employee[] = [];
    employeeList.push(this.employee);
    window.localStorage.setItem('employeeList', JSON.stringify(employeeList));
    // this.shared.employeeList.push(this.employee);
    this.msg.pushData('From Employee Form Component');
    // this.router.navigate(['list']);
  }

  submitForm() {
    // this.http.getBusinessPromise().then((res: any) => {
    //   console.log(res);
    // });
    this.http.getBusinessObseravle().subscribe((res: any) => {
      console.log(res);
    });
    const payload = {
      person_name: this.employeeForm.get('firstName').value,
      business_name: this.employeeForm.get('lastName').value,
      business_gst_number: 1232
    }
    // this.http.postData(payload).subscribe(() => {
    //   this.http.getBusinessObseravle().subscribe((res: any) => {
    //     console.log(res);
    //   });
    // });
    // if (this.employeeForm.valid) {
    //   console.log(this.employeeForm.get('firstName').value);
    //   this.employee.firstName = this.employeeForm.get('firstName').value;
    // } else {
    //   alert('Invalid Form');
    // }
  }
}
