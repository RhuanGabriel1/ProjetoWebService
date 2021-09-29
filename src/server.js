const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
