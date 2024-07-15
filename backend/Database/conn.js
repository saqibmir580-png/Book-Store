const mongoose=require('mongoose');

const conn=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("databse is connected");
        
    } catch (error) {
        console.log(error);
        
    }
}
conn();
