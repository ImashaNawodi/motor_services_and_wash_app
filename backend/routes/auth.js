import express from 'express';
import { Login } from '../models/loginUserModel.js';

const router =express.Router();
// Route to save a new user
router.post('/signup', async (request, response) => {
    try {
        if (
          !request.body.fullname||
          !request.body.email||
          !request.body.password
          
        ){
          return response.status(400).send({
            message : 'Send all required fields: fullname',
          });
        }
      
        const newLogin = new Login( {
            fullname :request.body.fullname,
            email:request.body.email,
            password:request.body.password,
         
        });
      
      const login = await newLogin.save();
      response.status(200).json(login);
       
    } catch (error) {
        response.status(500).json(err);
    }
});



export default router;