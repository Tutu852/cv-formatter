const express = require('express');
const app = express();
const dotenv =require("dotenv");
const cors = require('cors');
const database = require("./config/Database");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload")
const aiRoutes = require("./routes/airouts")
const uploadFile = require("./routes/fileupload")

dotenv.config();



const PORT  = process.env.PORT || 3000;

database.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);
cloudinaryConnect();

app.use("/api/v1/ai",aiRoutes);
app.use("/api/v1/file",uploadFile);
app.use("/api/v1/ai", require("./routes/airouts"));



app.get("/",(req,res)=>{
   return res.json({
    success:true,
    message:"Server is running"
   })
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})
