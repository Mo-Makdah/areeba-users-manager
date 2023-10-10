import "dotenv/config";

import express from "express";

import phoneRoutes from "./routes/phone";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/validator", phoneRoutes);

export default app;
