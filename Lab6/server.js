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
    const rating = JSON.parse(data)["rating"];
    const province = JSON.parse(data)["province"];
    const features = JSON.parse(data)["features"];
    const groceryItems = JSON.parse(data)["shopmost"];
    const shoppingPreferences = JSON.parse(data)["shoppingpref"];
    const imp = JSON.parse(data)["imp"];
    const filledTemplate = htmlTemplate
      .replace(/{{five}}/g, rating["5"])
      .replace(/{{four}}/g, rating["4"])
      .replace(/{{three}}/g, rating["3"])
      .replace(/{{two}}/g, rating["2"])
      .replace(/{{one}}/g, rating["1"])

      .replace(/{{Sort_and_filter}}/g, features["Sort and filter"])
      .replace(/{{Flyers}}/g, features["Flyers"])
      .replace(/{{Store_Finder}}/g, features["Store Finder"])
      .replace(/{{Digital_Services}}/g, features["Digital Services"])
      .replace(/{{Trending_in_your_area}}/g, features["Trending in your area"])

      .replace(/{{Fruits_and_vegetables}}/g, groceryItems["Fruits and vegetables"])
      .replace(/{{Dairy_and_Eggs}}/g, groceryItems["Dairy and Eggs"])
      .replace(/{{Bread_and_Bakery}}/g, groceryItems["Bread and Bakery"])
      .replace(/{{Meat_and_Seafood}}/g, groceryItems["Meat and Seafood"])
      .replace(/{{Chips_and_Snacks}}/g, groceryItems["Chips and Snacks"])
      .replace(/{{Medicine_and_Drugs}}/g, groceryItems["Medicine and Drugs"])
      .replace(/{{Other}}/g, groceryItems["Other"])

      .replace(/{{shoppingpref\[\]}}/g, createListItems(JSON.parse(data)['shoppingpref']))
      
      .replace(/{{imp}}/g, imp.join('</p><p>'))
      
      .replace(/{{AB}}/g, province["AB"])
      .replace(/{{BC}}/g, province["BC"])
      .replace(/{{MB}}/g, province["MB"])
      .replace(/{{NB}}/g, province["NB"])
      .replace(/{{NL}}/g, province["NL"])
      .replace(/{{NS}}/g, province["NS"])
      .replace(/{{NT}}/g, province["NT"])
      .replace(/{{NU}}/g, province["NU"])
      .replace(/{{ON}}/g, province["ON"])
      .replace(/{{PE}}/g, province["PE"])
      .replace(/{{QC}}/g, province["QC"])
      .replace(/{{SK}}/g, province["SK"])
      .replace(/{{YT}}/g, province["YT"])

      .replace(/{{In_person}}/g, shoppingPreferences["In person"])
      .replace(/{{Online_pickup}}/g, shoppingPreferences["Online pickup"])
      .replace(/{{Online_delivery}}/g, shoppingPreferences["Online delivery"])
      .replace(/{{Other shop}}/g, shoppingPreferences["Other shop"]);

    // Send the filled HTML template
    res.send(filledTemplate);
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  }
});

function createListItems(arr) {
  if (Array.isArray(arr)) {
    return `<ol>${arr.map(item => `<li>${item}</li>`).join('')}</ol>`;
  } else {
    return arr;
  }
}
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
