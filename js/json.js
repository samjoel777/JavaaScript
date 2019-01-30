var employee = {
    "first_Name" : "SAM",
    "last_Name" : "JOEL",
    "employee_Id" : 311177110136,
    "employee_Address" : {
        "street" : "Radha Nagar",
        "pincode" : 533003
    },
    "friends" : ["Umar","Jani","Shareef","Mahesh","Sudheer"]
}

// json Object --> json String
var jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(typeof jsonString);

// json String --> json Object
var jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof jsonObject);