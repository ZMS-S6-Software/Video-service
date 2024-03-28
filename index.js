import express from 'express';
import mongoose from 'mongoose';
//controllers
import movieController from "./controllers/movieController.js";

const app = express();
app.use(express.json());

mongoose.set('debug', true);
mongoose.connect("mongodb+srv://Mattijs99:MC_Mindless.21@zms-s6.8rrwbmh.mongodb.net/sample_mflix?retryWrites=true&w=majority");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

movieController(app)
