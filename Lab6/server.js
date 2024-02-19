const express = require('express'); //import express module
const bodyParser = require('body-parser');
const path = require('path');

const app = express(); //create an express app
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false })); //parse urls
app.use(express.static(path.join(__dirname, 'public'))); //parse the css and scripts, without this we can't use these from the backend

//send the survey when access from here
//to access go on: localhost:3000/survey
app.get('/survey', (req,res) =>{
    res.sendFile(__dirname+'/public/index.html');
});

//what happens when user submits
app.post( '/submit', (req,res) => {
    const formData = req.body;

    console.log('Form data:', formData);
    res.send('Form data received: ' + JSON.stringify(formData));
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));