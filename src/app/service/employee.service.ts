import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEmployee, Departments, EmployeeList } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpClient);

  constructor() { }

  getEmployees():Observable<EmployeeList>{
    return this.http.get<EmployeeList>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees');
  }

  getAllRoles(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllRoles');
  }

  getDepartments():Observable<Departments>{
    return this.http.get<Departments>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments');
  }

  createEmployee(reqObj:CreateEmployee):Observable<CreateEmployee>{
    return this.http.post<CreateEmployee>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee',reqObj);
  }



}
