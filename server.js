import express from 'express';
import mongoose from 'mongoose';
const app = express();


//routes
app.get('/', (req, res) => {
    res.send('hello nodeapi')
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect("mongodb+srv://Mattijs99:MC_Mindless.21@zms-s6.8rrwbmh.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=ZMS-s6");