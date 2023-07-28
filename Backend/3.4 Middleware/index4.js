import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
