import express from "express";

import validatorsRoutes from "./routes/validators";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/validator", validatorsRoutes);

export default app;
