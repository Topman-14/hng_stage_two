require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;
const personRoutes = require('./routes/personRoutes.js')

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/', personRoutes);

app.listen(port, "localhost", () => {
    console.log(`Server listening on localhost:${port}`);
});


mongoose.connect(process.env.MONGO_URI).then(()=>{}).catch((err)=>{
        console.log(err);
})

   

  