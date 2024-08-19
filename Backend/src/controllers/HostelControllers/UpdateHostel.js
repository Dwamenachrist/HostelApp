const hostelModel = require('../../models/HostelModel')
const asyncHandler = require('express-async-handler');
const updateHostel = asyncHandler(async (req, res) => {
    const _id = req.params.id
    const Hostel = await hostelModel.findById(_id)

    if(!Hostel) {
        res.status(400).json({ message: 'Hostel was not found'})
    }

    if(req.body.rooms){
        Hostel.rooms = [...Hostel.rooms, ...req.body.rooms]
    }

    const updatedHostel = await Hostel.save();

    if (!updatedHostel) {
        return res.status(400).json({message: 'Hostel details was not updated.'});
    }
    return res.status(200).json(updatedHostel);

})

module.exports = {updateHostel};