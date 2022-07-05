const connectionWithMongoose = require("./connection")
const { insertManyWithMongoose  } = require("./create");
const { deleteWithLastCompany } = require("./delete");
const { findAllWithMongoose, findAllWithSalary, findAllWithExperience, findWithTwoConditions } = require("./read");
const { updateWithSalary } = require("./update");


connectionWithMongoose();

insertManyWithMongoose();

findAllWithMongoose();

findAllWithSalary();

findAllWithExperience();

findWithTwoConditions();

updateWithSalary();

deleteWithLastCompany();