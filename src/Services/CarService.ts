import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private _model: CarODM;

  constructor(modelODM: CarODM) {
    this._model = modelODM;
  }

  public async createCar(car: ICar): Promise<ICar | null> {
    const result = await this._model.create(car);
    const newCar = new Car(result).returnData();

    return newCar;
  }

  public async findAll(): Promise<ICar[] | null> {
    const allCars = await this._model.findAll();
    const result = allCars.map((car) => ({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      seatsQty: car.seatsQty,
      doorsQty: car.doorsQty,
    }));

    return result;
  }
}

export default CarService;