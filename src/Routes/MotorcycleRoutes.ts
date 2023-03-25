import { Request, Response, Router, NextFunction } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorcycleController(req, res, next).create(),
);

export default motorcycleRouter;