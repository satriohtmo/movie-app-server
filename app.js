const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const errorHandler = require("./middlewares/errHandle");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
