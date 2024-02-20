app.get("/analysis", async (req, res) => {
  const filePath = path.join(__dirname, "data", "savedform.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
      return;
    }

    // Parse the JSON data
    const formData = JSON.parse(data);

    // Create an HTML string to display the form data
    let htmlOutput = `<html><head><title>Analysis Page</title></head><body>`;
    htmlOutput += `<h1>Survey Analysis</h1>`;
    htmlOutput += `<p>Here are the results of the survey:</p>`;
    htmlOutput += `<ul>`;
    for (const key in formData) {
      htmlOutput += `<li><strong>${key}</strong>: ${formData[key]}</li>`;
    }
    htmlOutput += `</ul>`;
    htmlOutput += `</body></html>`;

    // Send the HTML response to the client
    res.send(htmlOutput);
  });
});
