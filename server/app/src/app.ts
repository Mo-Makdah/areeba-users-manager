import express from "express";

import usersRoutes from "./routes/users";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", usersRoutes);

export default app;
