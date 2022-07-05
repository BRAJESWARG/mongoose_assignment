const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { employeeSchema } = require("./schema");

const employeeModel = mongoose.model('employees', employeeSchema );


const insertManyWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const employee1 = employeeModel({
            "firstname": "John",
            "lastname": "Doe",
            "salary": 25000,
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": 10000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "gradStream": "CSE",
            "yearGrad": 2016
        })

        const employee2 = employeeModel({
            
            "firstname": "Rohan",
            "lastname": "Jame",
            "salary": 30000,
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "gradStream": "CSE",
            "yearGrad": 2015
        })

        const employee3 = employeeModel({

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        })

        const employee4 = employeeModel({

            "firstname": "Sao",
            "lastname": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 30000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee5 = employeeModel({

            "firstname": "Jame",
            "lastname": "roh",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        })

        const employee6 = employeeModel({

            "firstname": "Rohan",
            "lastname": "Jame",
            "salary": 30000,
            "department": "Techincal",
            "lastCompany": "Y",
            "lastSalary": 30000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee7 = employeeModel({

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        })

        const employee8 = employeeModel({

            "firstname": "Sao",
            "lastname": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee9 = employeeModel({

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        })

        const employee10 = employeeModel({

            "firstname": "Rohan",
            "lastname": "Jame",
            "salary": 30000,
            "department": "Techincal",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 1,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee11 = employeeModel({

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 20000,
            "overallExp": 1,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "ECE"
        })

        const employee12 = employeeModel({

            "firstname": "Sao",
            "lastname": "Avika",
            "salary": 30000,
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567860,
            "yearGrad": 2015,
            "gradStream": "CSE"
        })

        const employee13 = employeeModel({

            "firstname": "Jame",
            "lastname": "Doe",
            "salary": 35000,
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": 15000,
            "overallExp": 2,
            "contactInfo": 1234567890,
            "yearGrad": 2019,
            "gradStream": "EEE"
        })


        const insertArr = [employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10, employee11, employee12, employee13]
        const result = await employeeModel.insertMany(insertArr);

        console.log("Successfully created the Employees record", result);
    } catch (e) {
        console.error("error while inserting Employees record", e);
    }
}
 
module.exports = { 
    insertManyWithMongoose 
};