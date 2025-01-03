import express from 'express';
import factusRoutes from './routes/factusRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', factusRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Ruta no encontrada',
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Ocurrió un error en el servidor',
  });
});


app.listen(3007, () => {
  console.log(`Servidor corriendo en el puerto 3007`);
});

export default app;
