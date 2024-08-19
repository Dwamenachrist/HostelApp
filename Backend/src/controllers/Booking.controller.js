const Booking = require('../models/BookingModel');
const asyncHandler = require("express-async-handler");
const Student = require('../models/StudentModel');
const Hostel = require('../models/HostelModel');

const bookRoom = asyncHandler(async (req, res) => {
    const studentId = req.params.id;
    const { startDate, endDate, hostelId } = req.body;

    
    if (!startDate || !endDate || !hostelId) {
      return   res.status(400).json({ message: "Please provide all fields." });
    
    }

    const studentExists = await Student.findById(studentId);


    if (!studentExists) {
        return res.status(404).json({ message: "Unauthorized" });
    }

    console.log("Found User ", studentExists)

    const hostelExists = await Hostel.findById(hostelId);

    if (!hostelExists) {
        return res.status(404).json({ message: "Hostel does not exist" });
    }

    console.log("Found Hostel ", hostelExists)

    // Check if the student has already booked a room in the hostel
    const roomAlreadyBooked = hostelExists.rooms.some(room => 
        room.bookings.some(booking => booking.fullName === `${studentExists.firstName} ${studentExists.lastName}`)
    );

    if (roomAlreadyBooked) {
        return res.status(500).json({ message: "You have already booked this room" });
    } 

    // Find an available room
    const roomToUpdate = hostelExists.rooms.find(room => room.available);

    // if (!roomToUpdate) {
    //     return res.status(404).json({ message: "No available room found." });
    // }

    // Create new booking
    const newBooking = await Booking.create({
        studentId,
        startDate,
        endDate,
        hostelId
    });

    if (!newBooking) {
        return res.status(500).json({ message: "Booking failed. Please try again." });
    } 

    // Add the booking to the room's bookings array
    roomToUpdate.bookings.push({
        fullName: `${studentExists.firstName} ${studentExists.lastName}`,
        phoneNumber: studentExists.phoneNumber,
        email: studentExists.email
    });

    // Update room availability and booking ID
    roomToUpdate.bookingId = newBooking._id;
    roomToUpdate.available = false;

    await hostelExists.save();

    return res.json(newBooking);
});

module.exports = { bookRoom };



module.exports = { bookRoom };