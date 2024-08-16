const bcrypt = require('bcrypt');
const managerSchema = require("../models/ManagerModel")

const isPasswordMatched = async(password, email) => {
    const salt = bcrypt.genSaltSync(10)
    const saltedPassword = await bcrypt.hash(password, salt);
    const passwordExists = await managerSchema.findOne({email: email, password: saltedPassword});
    if (passwordExists){
        return true
    }else {
        return false
    }
    // return saltedPassword;
}

module.exports = {isPasswordMatched} ;