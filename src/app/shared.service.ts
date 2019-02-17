import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  employeeList: Employee[] = [];
}
 export interface Employee {
   firstName: string;
   lastName: string;
   address?: string;
 }