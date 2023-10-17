import express from "express";
import mongoose from "mongoose";
import { User } from "./models/userModel.js";
import { PORT ,mongoDBURL} from "./config.js";
import userReservationRoute from "./routes/userReservationRoute.js";
import cors from 'cors';


const app = express();
// Middleware for parsing request body
app.use(express.json());


// Middleware for handling CORS Policy

app.use(cors());
/*
app.use(
      cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
); */



app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To The Motor Services And Wash Application');
});

app.use('/users',userReservationRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to the database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
