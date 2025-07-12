import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSourceConection } from "./config/data-source";

AppDataSourceConection.initialize()
  .then(() => {
    console.log("Base de datos conectada exitosa");
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });
