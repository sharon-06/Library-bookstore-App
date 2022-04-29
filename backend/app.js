const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use("/books",router)//localhost:5000/books



mongoose
.connect(
    "mongodb+srv://sharon_06:sharonAAS@cluster0.tvkyc.mongodb.net/bookstore?retryWrites=true&w=majority"
)
.then( () => console.log("Connected To Database"))
.then( () => {

    app.listen(5000);

})
.catch((err) => console.log(err));