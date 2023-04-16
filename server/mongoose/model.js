import mongoose from "mongoose";
import schema from "./schema/index.js";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", true);

const db = mongoose.connection;
const model = (() => {
  db.on("error", console.error);
  db.on("open", () => {
    console.log("Connection mogodb!");
  });

  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const model = {};
  for (let key in schema) {
    model[key] = mongoose.model(key, schema[key]);
  }

  return model;
})();

export default model;
