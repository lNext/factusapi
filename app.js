import express from "express";
import factusRoutes from "./routes/factusRoutes.js";

import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/api", factusRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Ocurrió un error en el servidor",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

export default app;
