const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const path=require('path')

const app = express();
const port = 3001;
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/appdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema and model
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    timing: String,
  about:String,
});

const FormModel = mongoose.model("ps", formSchema);

// Endpoint to handle form submissions
app.post("/submit", (req, res) => {
    const newFormEntry = new FormModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      time: req.body.time,
      about: req.body.about,
    });
    newFormEntry.save()
        .then(() => {
        res.send('success')
        }).catch((e) => {
        console.log(e);
    })
});
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
