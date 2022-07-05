const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { employeeSchema } = require("./schema");

const employeeModel = mongoose.model('employees', employeeSchema );

const updateWithSalary = async () => {
    try {
        await connectionWithMongoose();
        const result = await employeeModel.updateMany({"salary": {$gt: 30000}}, {$set: {"salary": 28000}});

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

module.exports = {
    updateWithSalary
}