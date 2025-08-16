const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "Express app";

// Routes for static pages
app.get("/", (req, res) => {
  console.log(`\n A Request was served on / by ${appName}`);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
  console.log(`\n A Request was served on /contact by ${appName}`);
});

// API route that returns JSON data
app.get("/api/data", (req, res) => {
  console.log(`\n A Request was served on /api/data by ${appName}`);
  res.json({ message: "Hello from Express!", status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
