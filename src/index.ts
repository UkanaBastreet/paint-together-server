import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.listen(PORT, function listenHandler() {
  console.log("Server running at port", PORT);
});
