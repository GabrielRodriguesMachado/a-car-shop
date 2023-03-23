import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private _seatsQty: number;
  private _doorsQty: number;

  constructor({ id, model, year, color, status, buyValue, seatsQty, doorsQty }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
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