require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const personRoutes = require('./routes/personRoutes.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api', personRoutes);


const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(port, () => {
        console.log(`Server listening on localhost:${port}`);
    });

    console.log("Connected to MongoDB");
}).catch((err)=>{
        console.log(err);
})

   

  