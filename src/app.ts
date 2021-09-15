import express from "express";
import cors from "cors";
import helmet from "helmet";
const mongoose = require('mongoose');
import * as dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const password = process.env.MONGODBPASS

const uri = `mongodb+srv://admin_main:${password}@cluster0.wvzsv.mongodb.net/users?retryWrites=true&w=majority`;
mongoose.connect(uri, () => {console.log('connected to db');
})

server.get('/users', (req, res, next) => {
  res.status(200)
});

//eslint-disable-next-line
server.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ error: err, message: err.message });
});



export default server