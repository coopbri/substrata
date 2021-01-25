/**
 * Global (core) middleware. Injected at server level.
 */

import express, { RequestHandler } from "express";

// JSON middleware
export const json = express.json();

// CORS middleware
export const cors: RequestHandler = (_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};
