import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEmployee, Departments, EmployeeList } from '../models/employee.model';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http = inject(HttpClient);

  constructor() { }

  getEmployees():Observable<EmployeeList>{
    return this.http.get<EmployeeList>(environment.api_url + 'GetEmployees');
  }

  getAllRoles(){
    return this.http.get(environment.api_url + 'GetAllRoles');
  }

  getDepartments():Observable<Departments>{
    return this.http.get<Departments>(environment.api_url + 'GetDepartments');
  }

  createEmployee(reqObj:CreateEmployee):Observable<CreateEmployee>{
    return this.http.post<CreateEmployee>(environment.api_url + 'CreateEmployee',reqObj);
  }



}
