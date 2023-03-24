import { Model, Schema, model, models, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected modelName: string;
  protected schema: Schema<T>;

  constructor(modelName: string, schema: Schema<T>) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(id: string, body: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, body, { new: true });
  }
}

export default AbstractODM;
