import express from "express";
import bodyParser from "body-parser";

const app = express();

import userRoutes from "./route/users.js";

const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("[TEST]!");

  res.send("Hello From Homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: localhost:${PORT}`)
);
