const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs').promises;  // Use fs.promises for asynchronous file operations
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const {
  Schema,
  model
} = require("mongoose");
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

//connection
mongoose.connect(`mongodb+srv://mohdaqib921:Aqib8267@cluster0.tocokja.mongodb.net/My-Portfolio?retryWrites=true&w=majority`,{
  useNewUrlParser:true
}).then((res)=>{
  console.log(res.connection.host);
})

//model
const reviewsSchema = new Schema({
  username:{type:String, require},
  rating:{type:Number,require},
  org:{type:String,require},
  msg:{type:String,require},
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const reviewModel = model("Reviews",reviewsSchema);

app.get('/reviews',async(req,res)=>{
  
  try {
    const data = await reviewModel.find({});
    if(data.length==0){
      return res.json({error:"No review availabe"});
    }
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.json({error:'server error'});
  }
})
app.post('/ad-review',async(req,res)=>{
  const {username,org,msg,rating}=req.body;
  console.log(req.body);
  try {
    const data=await reviewModel.create({
      username:username,
      org:org,
      msg:msg,
      rating:rating
    })
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.json({error:'server error'});
  }
})
app.listen(process.env.PORT,()=>{
  console.log(`server is running at ${process.env.PORT}`);
})