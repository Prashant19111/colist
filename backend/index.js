const connectToMongo = require("./db");
connectToMongo();

const express = require("express");

const app = express();

const port = 5000;
var cors = require('cors');

app.use(cors());
app.use(express.json()); //middleware used
//Available Routes
app.use('/api/auth',require('./routes/auth'));
app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
})
