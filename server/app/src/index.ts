import "dotenv/config";
import app from "./app";
import mongoose from "mongoose";
import env from "./utils/validateEnv";

const port = env.PORT;

const mongodbConnectionString = env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(mongodbConnectionString)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server is running. Port: " + port);
    });
  })
  .catch(console.error);
