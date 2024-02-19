const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false })); //parse urls
app.use(express.static(path.join(__dirname, 'public'))); //parse the css and scripts, without this we can't use these from the backend
app.use(bodyParser.json());

/// API ENDPOINTS ///

// Endpoint: to view the survey when accessing from the server
// To access go on: localhost:3000/survey
app.get('/survey', (req,res) =>{
    res.sendFile(__dirname+'/public/index.html');
});

// Endpoint: After user submits the survey, save the form data to data/savedform.txt
// If we haven't submitted yet, this will contain previous saved data
// To access go on: localhost:3000/submit 
app.post( '/submit', (req,res) => {
    const formData = req.body;

    console.log('Form data at server:', formData);

    const formDataString = JSON.stringify(formData);

    // TODO probably some processing here to make sure that all form data is saved
    
    // Write the form data to txt file
    fs.writeFileSync('data/savedform.json', formDataString);

    console.log('Form data saved to file successfully.');
});

// Endpoint: read the data from savedform.json and display it
// To access go on: localhost:3000/analysis 
app.get('/analysis', async (req,res) =>{

    const filePath = path.join(__dirname, 'data', 'savedform.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
        return;
        }

        //display json as string on endpoint
        console.log("displaying form data on analysis")

        // TODO instead of just raw data string, send a templated html instead here to display data from saved json neatly

        res.send(data);
    });

});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));