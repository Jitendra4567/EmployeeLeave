import { Component, inject } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { RouterLink } from '@angular/router';
import { EmployeeList } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  imports: [RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent{
  empService = inject(EmployeeService);
  
  employee:EmployeeList[] = [];

  ngOnInit(){
    this.getEmployee()
  }

  getEmployee(){
    this.empService.getEmployees().subscribe({
      next:(res:any)=>{
        this.employee = res.data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
