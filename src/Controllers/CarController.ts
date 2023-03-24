import { NextFunction, Request, Response } from 'express';
import CarODM from '../Models/CarODM';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService(new CarODM());
  }

  public async create() {
    const car: ICar = { ...this.req.body };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const allCars = await this.service.findAll();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
