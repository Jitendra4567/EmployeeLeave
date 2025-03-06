import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'employee',
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'add-employee',
                component:AddEmployeeComponent
            }
        ]
    }
];
