import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const__dir =

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
