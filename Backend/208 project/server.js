const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const express = require('express');
const userRoute = require('./src/routes/UserRoutes');
const hostelRoute = require('./src/routes/HostelRoutes');
const roomRoute = require('./src/routes/RoomRoutes');
// const fileupload = require('express-fileupload');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const cookieparser = require('cookie-parser');
dotenv.config();
connectDB()
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(cookieparser())

//mongoose.connect(process.env.MONGO_URL)
//  .then(() => console.log('Connected!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileupload());

app.use('/api/user', userRoute);
app.use('/api/hostel', hostelRoute);
app.use('/api/room', roomRoute);


app.listen(3000, function() {
    console.log("Server started on port 3000");
});

