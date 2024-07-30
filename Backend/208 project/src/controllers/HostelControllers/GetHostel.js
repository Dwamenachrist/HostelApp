const hostelSchema = require('../../models/HostelModel');
const asyncHandler = require('express-async-handler');

const getHostel = asyncHandler(async(req,res) => {
    const hostels = await hostelSchema.find();
    res.json(hostels);

})

module.exports = {getHostel}