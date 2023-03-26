import { Request, Response, Router, NextFunction } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();

motorcycleRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorcycleController(req, res, next).create(),
);

motorcycleRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorcycleController(req, res, next).findAll(),
);

motorcycleRouter.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorcycleController(req, res, next).findById(),
);

motorcycleRouter.put(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorcycleController(req, res, next).update(),
);

motorcycleRouter.delete(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    new MotorcycleController(req, res, next).delete(),
);

export default motorcycleRouter;