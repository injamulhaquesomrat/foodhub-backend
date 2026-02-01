import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:4000",
    credentials: true,
  })
);


app.use(express.json());


app.get("/", (req, res) => {
  res.send("FoodHub Backend is Successfully Running");
});

export default app;