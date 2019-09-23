const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const port = 3500;
require("dotenv/config");
mongoose.connect(process.env.URL_DATABASE, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser());
app.use(routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is runing on ${port}`);
});
