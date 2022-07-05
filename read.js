const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { employeeSchema } = require("./schema");

const employeeModel = mongoose.model('employees', employeeSchema );

const findAllWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await employeeModel.find();

        console.log("Successfully found all the records", result);
    } catch (e) {
        console.error("error while finding records", e);
    }
}

const findAllWithSalary = async () => {
    try {
        await connectionWithMongoose();
        const result = await employeeModel.find({"salary": {$gt: 30000}});

        console.log("Successfully found all the records by Salary", result);
    } catch (e) {
        console.error("error while finding records", e);
    }
}

const findAllWithExperience = async () => {
    try {
        await connectionWithMongoose();
        const result = await employeeModel.find({"overallExp": {$gt: 1}});

        console.log("Successfully found all the records by Experience", result);
    } catch (e) {
        console.error("error while finding records", e);
    }
}

const findWithTwoConditions = async () => {
    try {
        await connectionWithMongoose();
        const result = await employeeModel.find({$and: [{"yearGrad": {$gt: 2015}}, {"overallExp": {$gt: 1}}]});

        console.log("Successfully found all the records by Experience and Grad Year", result);
    } catch (e) {
        console.error("error while finding records", e);
    }
}



module.exports = {
    findAllWithMongoose,
    findAllWithSalary,
    findAllWithExperience,
    findWithTwoConditions
}