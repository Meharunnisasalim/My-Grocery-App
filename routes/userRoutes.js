import express from 'express';
import  {registUser,loginUser,testUser, ForgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController}  from '../controllers/usercontroller.js';
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';
import jwt from 'jsonwebtoken'; 
import userModel from '../models/userModel.js';

//router object
 const router=express.Router()

 //routing
 //Register ,method POST
 router.post('/register',registUser)

 //Login ,method POST
 router.post('/login',loginUser)

 //Forgotpassword , method POST
 router.post('/forgot-password',ForgotPasswordController)

 //test routes
 router.get('/test',requireSignIn,isAdmin,testUser)

 //protected user-route auth
 router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).json({ok:true});
 });

 //protected admin-route auth
 router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
   res.status(200).json({ok:true});
});

//update profile
router.get('/profile',requireSignIn,updateProfileController)

//orders
router.get('/orders',requireSignIn,getOrdersController)

//All orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

//order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)

export default router;