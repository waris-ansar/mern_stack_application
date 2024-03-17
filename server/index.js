import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import PostRoutes from "./routes/posts.js";
import UserRoutes from "./routes/users.js";
import dotenv from "dotenv"

const app = express();
dotenv.config();

// calling routes 


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', PostRoutes);
app.use('/users', UserRoutes)
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true,})
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`this is error ${error.message}`));
