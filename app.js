const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));
// 👉 Root route renders index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 👉 Example API (optional)
app.post("/save-user", (req, res) => {
    console.log(req.body);
    res.json({ message: "Data received" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});