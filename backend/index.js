import express from "express";
import mongoose from "mongoose";
import { User } from "./models/userModel.js";
import { PORT ,mongoDBURL} from "./config.js";

const app = express();

app.use(express.json());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To The Motor Services And Wash Application');
});

// Route to save a new user reservation
app.post('/users', async (request, response) => {
    try {
        if (
          !request.body.VehicleType||
          !request.body.VehicleNumber ||
          !request.body.Services ||
          !request.body.ServiceStation ||
          !request.body.Date ||
          !request.body.Time ||
          !request.body.Comments
        ){
          return response.status(400).send({
            message : 'Send all required fields: VehicleType',
          });
        }
      
        const newUser = {
          VehicleType :request.body.VehicleType,
          VehicleNumber:request.body.VehicleNumber,
          Services:request.body.Services,
          ServiceStation:request.body.ServiceStation,
          Date:request.body.Date,
          Time:request.body.Time,
          Comments:request.body.Comments
        };
      
      const user = await User.create(newUser);
      return response.status(201).send(user);
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all user reservations
app.get('/users', async (request, response) => {
    try {
      
      const users = await User.find({});
      return response.status(201).json({
        count : users.length,
        data:users
      });
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get user reservation from database by id
app.get('/users/:id', async (request, response) => {
    try {
      const {id} =request.params;
      const user = await User.findById(id);
      return response.status(201).json(user);
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a user reservation
app.put('/users/:id', async (request, response) => {
    try {
        if (
            !request.body.VehicleType||
            !request.body.VehicleNumber ||
            !request.body.Services ||
            !request.body.ServiceStation ||
            !request.body.Date ||
            !request.body.Time ||
            !request.body.Comments
          )
          {
            return response.status(400).send({
              message : 'Send all required fields: VehicleType',
            });
          }
      const {id} =request.params;
      const result = await User.findByIdAndUpdate(id,request.body);
      if(!result)
      {
        return response.status(404).json({message:'User reservation is not found'});
      }
      return response.status(200).send({message :'User Reservation  is updated successsfully'});

     
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a user reservation

app.delete('/users/:id', async (request, response) => {
    try {
    
      const {id} =request.params;
      const result = await User.findByIdAndDelete(id);
      if(!result)
      {
        return response.status(404).json({message:'User reservation is not found'});
      }
      return response.status(200).send({message :'User Reservation  is deleted successsfully'});

     
       
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


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
