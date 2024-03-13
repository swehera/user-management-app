const express = require("express");
const home = require("./routes/home");
const db = require("./db");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(
  cors({
    origin: ["https://user-manage-app-five.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/home", home);
app.use("/post", home);
app.use("/", home);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
