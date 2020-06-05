import mongoose from "mongoose";
import { MONGO_URI } from "../config";
import "colors";

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Base de datos esta conectada".blue))
  .catch((error) => console.log(error));

import Blog from "./blog.schema";

export { Blog };
