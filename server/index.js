const bodyParser = require('body-parser');
const express = require('express');
const fs=require('fs');
const cors=require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app=express();

app.use(bodyParser.json());
app.use(cors());

const filePath = path.join(__dirname,"review.json");
// console.log(filePath);

const data = require(filePath);
// console.log(data);
app.post("/ad-review",async(req,res)=>{
    const {username,org,rating,msg}=req.body;
    console.log(req.body);
    try {
        if (!username || !org || !rating || !msg) {
            return res.status(400).json({ error: 'Please fill all fields' });
          }
          const newReview = { username, org, rating, msg };
            data.push(newReview);
          fs.writeFileSync(filePath,JSON.stringify(data));
          res.status(200).json({ message: 'Review added successfully!' });
        
    } catch (error) {
        console.log(error);
        res.json({error:"server error"});
    }
})

app.get('/ad-review', async (req, res) => {
    try {
      const data = fs.readFileSync(filePath);
    //   const jsonData = JSON.parse(data);
    const jsonData=JSON.parse(data);
      
      if (jsonData.length > 0) {
        res.status(200).json(jsonData);
      } else {
        res.json({ error: "No Review" });
      }
    } catch (error) {
      console.error("Error:", error.message);
      res.json({ error: "Server error" });
    }
  });

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
})