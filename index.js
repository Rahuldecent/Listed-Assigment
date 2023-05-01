const express = require("express");
const routes = require('./routes/route')
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  // const result=await sendMail();
  res.send("Welcome to Gmail API with NodeJS");
});

app.use('/api',routes);

app.listen(process.env.PORT, () => {
  console.log("Express app running on Port " + process.env.PORT);
});
