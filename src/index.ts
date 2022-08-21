import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;
app.get("/entry/likers/", async (req, res) => {
  const entryId = req.query.id;
  const likers = await axios.get(
    `https://tjournal.ru/vote/get_likers?id=${entryId}&type=1&mode=raw`
  );
  res.send(likers);
});
app.listen(port, () => console.log(`Running on port ${port}`));
