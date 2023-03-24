import { Request, Response, Router, NextFunction } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post(
  '/', 
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).create(),
);

carsRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).findAll(),
);

carsRouter.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new CarController(req, res, next).findById(),
);

export default carsRouter;