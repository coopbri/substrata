import express from "express";
import { globalMiddleware } from "./middleware";

import { authRoutes } from "./routes";

const { PORT = 4000 } = process.env;

// initialize express app
const app = express();

// global middleware
app.use(globalMiddleware.json);
app.use(globalMiddleware.cors);

// routes
app.use("/auth", authRoutes);

// root
app.get("/", (_, res) => {
  res.json({ message: "REST API is running" });
});

// start server process
app.listen(PORT, () => {
  console.log(`🚀 REST API server listening on port ${PORT}!`);
});
