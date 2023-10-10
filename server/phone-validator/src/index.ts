import "dotenv/config";
import app from "./app";
import env from "./utils/validateEnv";

const port = env.PORT;

app.listen(port, () => {
  console.log("Server is running. Port: " + port);
});
