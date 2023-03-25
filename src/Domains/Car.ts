import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private _seatsQty: number;
  private _doorsQty: number;

  constructor({ id, model, year, color, status, buyValue, seatsQty, doorsQty }: ICar) {
    super({ id, model, year, color, status, buyValue });
    this._seatsQty = seatsQty;
    this._doorsQty = doorsQty;
  }

  public returnData() {
    return {
      id: this.id,
      model: this.model,
      year: this.year,
      color: this.color,
      status: this.status,
      buyValue: this.buyValue,
      seatsQty: this._seatsQty,
      doorsQty: this._doorsQty,
    };
  }
}

export default Car;