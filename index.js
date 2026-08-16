// import mongoose from "mongoose";
import express from "express";
// import cors from "cors";
import Email from "./models/email.js";
const app = express();

app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/mydb");
// Local:
// mongoose.connect("mongodb://localhost:27017/mydb");

app.get("/", (req, res) => {
    res.json({
        message: "Hello World from Action"
    });
});
// Save Email
app.post("/save", async (req, res) => {
    await Email.create({
        email: req.body.email
    });

    res.json({
        message: "Saved Successfully"
    });
});

// Get All Emails
app.get("/emails", async (req, res) => {

    const emails = await Email.find();

    res.json(emails);
});

app.listen(3000, () => {
    console.log("Server Running");
});