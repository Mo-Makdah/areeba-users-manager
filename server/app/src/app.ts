import express from "express";

import usersRoutes from "./routes/users";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", usersRoutes);

export default app;
