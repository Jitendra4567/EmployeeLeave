import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  empService = inject(EmployeeService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  employeeRole:any;
  departments:any;
  employeeForm!:FormGroup;

  ngOnInit(){
    this.loadData();
    this.initForm();
  }

  initForm(){
    this.employeeForm = this.formBuilder.group({
      employeeId:[0],
      employeeName: [''],
      contactNo:[],
      emailId:[''],
      deptId:[0],
      password:[''],
      gender:[''],
      role:['']
    })
  }

  loadData(){
    //Roles
    this.empService.getAllRoles().subscribe({
      next:(res:any)=>{
        this.employeeRole = res.data;
      },
      error:(error)=>{
        console.log(error);
      }
    })

    //Department
    this.empService.getDepartments().subscribe({
      next:(res:any)=>{
        this.departments = res.data
      },
      error:(error)=>{
        console.log(error);
        
      }
    })

  }

  addEmployee(){
    let data = this.employeeForm.value;
    console.log(data);
    this.empService.createEmployee(data).subscribe({
      next:(res:any)=>{
        if(res.result == true){
          alert("Employee added successfully..");
          this.employeeForm.reset();
          this.router.navigateByUrl('/employee');
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })
    
  }

}
