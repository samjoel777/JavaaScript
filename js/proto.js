let registerForm = function (first_Name, last_Name,reg_Id,branch)
{
    this.first_Name = first_Name;
    this.last_Name = last_Name;
    this.reg_Id = reg_Id;
    this.branch = branch;
}

registerForm.prototype.name = (first_Name,last_Name) =>
{
    return this.first_Name + " " + this.last_Name;
}

registerForm.prototype.name = function (name) { return this.name = this.first_Name + " " + this.last_Name }; 

let roll_No_1 = new registerForm("SAM","JOEL",311177110136,"CSE");

console.log(roll_No_1);

console.log(roll_No_1.name());

// Example 2

// let Employee = function (name,age,salary,dept,exp)
// {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.dept = dept;
//     this.exp = exp;
// }

// Employee.prototype.s_Name = function(name) 
// {
//     return this.name = name;    
// }

// let emp1 = new Employee("SAM",24,70000,"DEV",3);

// console.log(emp1.s_Name("SARELLA"));
// console.log(emp1);