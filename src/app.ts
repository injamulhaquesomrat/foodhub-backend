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

// posts
// app.use("/posts", postRouter);

// comments
// app.use("/comments", commentRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;