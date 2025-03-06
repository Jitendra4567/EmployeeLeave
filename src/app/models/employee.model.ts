export interface EmployeeList {
    employeeId: number,
    employeeName: string,
    deptId: number,
    deptName: string,
    contactNo: number,
    emailId: string,
    role: string
}

export interface Departments{
    deptId: number,
    deptName: string,
    deptHeadName: string,
    deptHeadEmpId: number,
    createdDate: string
}

export interface CreateEmployee extends EmployeeList{
    password: string,
}