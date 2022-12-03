export interface EmployeeRequest {
    name?: any,
    skills?: string[]
}

export default interface EmployeeModel {
    _id?: string,
    Name: string,
    Date_of_birth:string
    Gender: string,
    Salary: string,
    skills: string[],
    checked?: boolean,
    
}