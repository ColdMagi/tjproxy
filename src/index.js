import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;
const sleep = (delay) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

axios.interceptors.response.use(
  async function (response) {
    await sleep(350);
    return response;
  },
  function (error) {
    // Do something with response error
    console.error(error);
    return Promise.reject(error);
  }
);
router.get("/entry/likers/", async (req, res) => {
  const entryId = req.query.id;
  const likers = await axios
    .get(`https://tjournal.ru/vote/get_likers?id=${entryId}&type=1&mode=raw`)
    .then((resp) => resp.data);
  res.json(likers);
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
