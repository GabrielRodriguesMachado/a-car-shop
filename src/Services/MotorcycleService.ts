import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyleODM';
import ErrorClass from '../utils/ErrorClass';

class MotorcycleService {
  private _model: MotorcycleODM;
  readonly invalidMongoID: string = 'Invalid mongo id';
  readonly motorcycleNotFound: string = 'Motorcycle not found';

  constructor(modelODM: MotorcycleODM) {
    this._model = modelODM;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<IMotorcycle | null> {
    const result = await this._model.create(motorcycle);
    const newMotorcycle = new Motorcycle(result).returnData();

    return newMotorcycle;
  }

  public async findAll(): Promise<IMotorcycle[] | null> {
    const allMotorcycles = await this._model.findAll();
    const result = allMotorcycles.map((motorcycle) => ({
      id: motorcycle.id,
      model: motorcycle.model,
      year: motorcycle.year,
      color: motorcycle.color,
      status: motorcycle.status,
      buyValue: motorcycle.buyValue,
      category: motorcycle.category,
      engineCapacity: motorcycle.engineCapacity,
    }));

    return result;
  }

  public async findById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new ErrorClass(422, this.invalidMongoID);
    const motorcycle = await this._model.findById(id);

    if (!motorcycle) throw new ErrorClass(404, this.motorcycleNotFound);
    return new Motorcycle(motorcycle).returnData();
  }
}

export default MotorcycleService;