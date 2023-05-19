const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require("path");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


// app.use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/', require('./routes'));

// blocking cors errors:
const corsOptions = {
  origin: process.env.HOST_URL,
  methods: ["PUT", "GET", "POST", "DELETE", "PATCH"],
  allowedHeaders: ["*"],
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET", true);
    // res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

// Upload images
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_API_KEY, () => {
    console.log("Connected to MongoDB");
  });

  
app.listen("8080", () => {
  console.log("Backend is running.");
});
