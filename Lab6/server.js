const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs/promises"); // Use fs.promises for async/await support

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //parse urls
app.use(express.static(path.join(__dirname, "public"))); //parse the css and scripts, without this we can't use these from the backend
app.use(bodyParser.json());

/// API ENDPOINTS ///

// Endpoint: to view the survey when accessing from the server
// To access go on: localhost:3000/survey
app.get("/survey", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Endpoint: After user submits the survey, save the form data to data/savedform.txt
// If we haven't submitted yet, this will contain previous saved data
// To access go on: localhost:3000/submit
app.post("/submit", (req, res) => {
  console.log(req.body);
  const formData = req.body;

  console.log("Form data at server:", formData);

  const formDataString = JSON.stringify(formData, null, 2); // Pretty print JSON

  // Save the form data to a file
  const filePath = path.join(__dirname, "data", "savedform.json");
  fs.writeFile(filePath, formDataString)
    .then(() => {
      console.log("Form data saved to file successfully.");
      // Redirect to the analysis page after saving the data
      res.redirect("/analysis");
    })
    .catch((err) => {
      console.error("Error writing file:", err);
      res.status(500).send("Error writing file");
    });
});

// Endpoint: read the data from savedform.json and display it
// To access go on: localhost:3000/analysis
app.get("/analysis", async (req, res) => {
  const filePath = path.join(__dirname, "data", "savedform.json");
  try {
    // Read file asynchronously using fs.promises.readFile
    const data = await fs.readFile(filePath, "utf-8");

    //display json as string on endpoint
    console.log("displaying form data on analysis");

    // TODO instead of just raw data string, send a templated html instead here to display data from saved json neatly
    // Load HTML template from file
    const templatePath = path.join(__dirname, "backend", "analysis.html");
    const htmlTemplate = await fs.readFile(templatePath, "utf-8");
    // Replace placeholders in the template with actual data
    const filledTemplate = htmlTemplate
      .replace(/{{fname}}/g, JSON.parse(data).fname)
      .replace(/{{lname}}/g, JSON.parse(data).lname)
      .replace(/{{province}}/g, JSON.parse(data).province)
      .replace(/{{rating}}/g, JSON.parse(data).rating)
      .replace(/{{features\[\]}}/g, createListItems(JSON.parse(data)['features[]']))
      .replace(/{{shopmost\[\]}}/g, createListItems(JSON.parse(data)['shopmost[]']))
      .replace(/{{shoppingpref\[\]}}/g, createListItems(JSON.parse(data)['shoppingpref[]']))
      .replace(/{{imp}}/g, JSON.parse(data).imp);

    // Send the filled HTML template
    res.send(filledTemplate);
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  }
});

function createListItems(arr) {
  if (Array.isArray(arr)) {
    return `<ul>${arr.map(item => `<li style="padding-left: 0;">${item}</li>`).join('')}</ul>`;
  } else {
    return arr;
  }
}
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
