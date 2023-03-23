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
}

export default CarService;