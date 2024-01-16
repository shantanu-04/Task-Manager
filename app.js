import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import tasks from "./routes/tasks.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

// ROUTER

app.use("/api/v1/tasks", tasks);

// MONGOOSE SETUP

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(port, () => console.log(`server is running on port: ${port}`))
})
.catch((error) => console.log(`there is an error : ${error}`));

console.log('Task Manager App')
