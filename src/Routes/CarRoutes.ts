import { Request, Response, Router, NextFunction } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post(
  '/', 
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).create(),
);

export default carsRouter;