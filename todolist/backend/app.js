const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const port=process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb+srv://mshrfkhn2001:9415804905@cluster0.zjsd0md.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
  console.log("mongodb is connected");
  
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
