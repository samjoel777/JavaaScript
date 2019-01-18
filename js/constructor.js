//Custom Constructor Example

// let Vehicle = function (no,state,board)
// {
//     this.no = no;
//     this.state = state;
//     this.board = board;
// }

// let veh = new Vehicle(1234,"AP","Yellow");

// console.log(veh);

// Calculating Salary Based on experience 

let Employee = function (name,no,location,experience,salary)
{
    this.name = name;
    this.no = no;
    this.location = location;
    this.experience = experience;
    
    calculateSalary =  function ()
    {
        if(experience <= 3)
        {
            Employee.salary = 20000;
        }
        if(experience > 3 && experience < 7)
        {
            Employee.salary = 40000;
        }
        if(experience >= 7)
        {
            Employee.salary = 60000;
        }
        return Employee.salary;
        
    },

    this.salary = calculateSalary()
}

let emp1 = new Employee("SAM",143,"US",8);

console.log(emp1);

let emp2 = new Employee("JOEL",777,"UK",3);

console.log(emp2);

// Rough Example

// user = {
//     experience : 8,
    
//     cal_Salary : function ()
//     {
//         if(this.experience < 3)
//         {
//             user.salary = 20000;
//         }
//         if(this.experience > 3 && this.experience < 7)
//         {
//             user.salary = 40000;
//         }
//         if(this.experience > 7)
//         {
//             user.salary = 60000;
//         }
//         return user.salary;
//     },

//     // salary : cal_Salary()

// };

// console.log(user.cal_Salary());


