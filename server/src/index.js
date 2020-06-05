import app from "./app";
import "colors";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}/`.blue);
});
