const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require("./routes/api/items");
const app = express();

//DB dotenv
//const dbenv = require('mongoURI').config()

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
    .connect("mongodb+srv://varun007:" + process.env.MONGO_PW + "@cluster0.oqd6e.mongodb.net/mern_collection_app?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routs
app.use("/api/items", items)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Sever started on port ${port}"));

