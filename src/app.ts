import express from "express";
import cors from "cors";
import helmet from "helmet";
require('dotenv/config')
const mongoose = require('mongoose');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const uri = process.env.MONGODB_URI

mongoose.connect(uri, () => {console.log('connected to db');
})

// import user route
import userRoute from './userRoute'
server.use('/users', userRoute);

//eslint-disable-next-line
server.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ error: err, message: err.message });
});



export default server