// npm init
// npm install express
// npm install mongoose
// npm install nodemon --save-dev
// npm run start-dev


const express = require('express');
// Ensimmäinen arvo on ympäristömuuttuja ja toinen paikallisen koneen portti
const port = process.env.PORT || 8080; 
//npm install mongoose
const mongoose = require('mongoose');
const app = express();

const body_parser = require('body-parser');

const machine_parameters = require('./machine_parameters');

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended:true
})); // material/id

// RESTfull API
// CRUD OPERATIONS
// CREATE
app.post("/api/machining-parameter-set", machine_parameters.api_post_parameter);

// READ, lue kaikki parameterit
app.get("/api/machining-parameter-sets", machine_parameters.api_get_all_parameters);

// READ, lue tietty parametri id perusteella
app.get("/api/machining-parameter-set/:id", machine_parameters.api_get_parameter);

// UPDATE
app.put("/api/machining-parameter-set/:id", machine_parameters.api_put_parameter);

// DELETE
app.delete("/api/machining-parameter-set/:id", machine_parameters.api_delete_parameter);

//restdb in mongodb
const database_uri = "mongodb+srv://server:LkmnVPW0M1YMfG8X@cluster0-1h0ze.mongodb.net/restdb?retryWrites=true&w=majority"; 

mongoose.connect(database_uri, {
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(()=>{
    console.log('database connected');
    app.listen(port);
}).catch(err=>{
    console.log(err);
});
