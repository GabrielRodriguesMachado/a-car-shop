import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRoutes from './Routes/CarRoutes';
import MotorcycleRouter from './Routes/MotorcycleRoutes';

const app = express();

app.use(express.json());
app.use('/cars', CarRoutes);
app.use('/motorcycles', MotorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
