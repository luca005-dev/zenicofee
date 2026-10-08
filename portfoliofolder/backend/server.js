const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "http://127.0.0.1:5500"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }
    next();
});
// Contact form endpoint contact API
app.post("/api/contact", (req, res) => {
    console.log("Received data:");
    console.log(req.body);
    res.json({
        success: true,
        message: "Message received successfully"
    });
});
// Start server
app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});