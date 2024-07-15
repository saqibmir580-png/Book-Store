const express=require('express');
const app=express();
const cors=require("cors")
 require('dotenv').config();
 require("./Database/conn");
 const user=require('./routes/user');
const book = require('./routes/book');
const favourite=require('./routes/favourite');
const cart=require('./routes/cart')
const order=require('./routes/order')

//this tells us the data is coming in json fromat
app.use(express.json())

app.use(cors());//use to frotend this package
 // we defin a route are API'S User 
 app.use("/api/v1",user);
//books api
 app.use("/api/v1",book);
 //favourite apis
 app.use("/api/v1",favourite);
 //cart apis
 app.use("/api/v1",cart);
 //order apis
 app.use("/api/v1",order);


app.listen(process.env.PORT,()=>{
    console.log(`sever is running on port${process.env.PORT}`);
});
