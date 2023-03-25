import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyleODM';

class MotorcycleService {
  private _model: MotorcycleODM;

  constructor(modelODM: MotorcycleODM) {
    this._model = modelODM;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<IMotorcycle | null> {
    const result = await this._model.create(motorcycle);
    const newMotorcycle = new Motorcycle(result).returnData();

    return newMotorcycle;
  }
}

export default MotorcycleService;