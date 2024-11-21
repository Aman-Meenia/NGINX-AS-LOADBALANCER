import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Aman Meenia Hello");
});

app.listen(port, () => {
  console.log("App is running on port 3000");
});
