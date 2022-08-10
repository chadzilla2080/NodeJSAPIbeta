const express = require("express");
const app = express();

// use a call back to get the status of a request object
// return a message to inform more about what took place, status code

app.get("/", (req, res) => {
  res.status(200).json({
    message: "All about request object.",
  });
});

app.listen(3000, () => {
  console.log("Server started and is running.");
});
