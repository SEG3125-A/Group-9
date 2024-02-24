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
  const formData = req.body;
  const filePath = path.join(__dirname, "data", "savedform.json");
  fs.readFile(filePath, 'utf-8')
  .then(existingData => {
    let combinedData;

    try {
      // Parse the existing data
      combinedData = JSON.parse(existingData);
    } catch (error) {
      // If parsing fails or the file is empty, initialize with an empty object
      combinedData = {};
    }

    for (const entry of Object.entries(formData).slice(2, )) {
      const [key, value] = entry;
      if(key === "imp"){
        combinedData[key].push(value);
      }else{
        console.log("bbb " + key + " " + value)
        if(typeof value === "string") combinedData[key][value] = ++combinedData[key][value];
        else{
          console.log("aaa " + key)
          for(const i of value){
            console.log(value)
            combinedData[key][i] = ++combinedData[key][i];
          }
        }
    
      }
    }

    // Convert combinedData to a string
    const formDataString = JSON.stringify(combinedData, null, 2);

    // Write the updated data back to the file
    return fs.writeFile(filePath, formDataString);
  })
  .then(() => {
    console.log("Form data appended to file successfully.");
    // Redirect to the analysis page after saving the data
    res.redirect("/analysis");
  })
  .catch((err) => {
    console.error("Error writing file:", err);
    res.status(500).send("Error writing file");
  });
});

app.get("/analysis", async (req, res) => {
  const filePath = path.join(__dirname, "data", "savedform.json");
  try {
    const data = await fs.readFile(filePath, "utf-8");

    console.log("displaying form data on analysis");

    const templatePath = path.join(__dirname, "backend", "analysis.html");
    let htmlTemplate = await fs.readFile(templatePath, "utf-8");

    const jsonData = JSON.parse(data);
    const imp = jsonData["imp"];

    // call separate functions for everything
    htmlTemplate = replaceCategoryInTemplate(htmlTemplate, jsonData["rating"]);
    htmlTemplate = replaceCategoryInTemplate(htmlTemplate, jsonData["province"]);
    htmlTemplate = replaceCategoryInTemplate(htmlTemplate, jsonData["features"]);
    htmlTemplate = replaceCategoryInTemplate(htmlTemplate, jsonData["shopmost"]);
    htmlTemplate = replaceCategoryInTemplate(htmlTemplate, jsonData["shoppingpref"]);

    const filledTemplate = htmlTemplate.replace(/{{imp}}/g, imp.join('</p><p>'));

    res.send(filledTemplate);
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  }
});

function replaceCategoryInTemplate(template, categoryData) {
  for (const category of Object.keys(categoryData)) {
    template = template.replace(new RegExp(`{{${category}}}`, 'g'), categoryData[category]);
    console.log(`{{${category}}}`);
  }
  return template;
}

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
