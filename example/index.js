const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/", router);

app.use("*", function (req, res) {
  return res.send({
    status: 404,
    error: {
      message: "Oops!",
      details: "Page not found",
    },
    data: [],
  });
});

app.listen(port, () => console.log(`server running in port ${port}`));
