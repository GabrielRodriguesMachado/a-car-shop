import { expect } from 'chai';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleODM from '../../../src/Models/MotorcyleODM';

describe('MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });

  const motorcycleNotFound = 'Motorcycle not found';
  const invalidMongoID = 'Invalid mongo id';
  const invalidId = 'invalid-id';

  const motorcycleExample: IMotorcycle = {
    id: '507f1f77bcf86cd799439011',
    model: 'Yamaha R1',
    year: 2022,
    color: 'Blue',
    status: true,
    buyValue: 20000,
    category: 'Sport',
    engineCapacity: 1000,
  };

  describe('createMotorcycle', function () {
    it('should create a motorcycle successfully', async function () {
      sinon.stub(MotorcycleODM.prototype, 'create').resolves(motorcycleExample);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      const result = await motorcycleService.createMotorcycle(
        motorcycleExample,
      );

      expect(result).to.deep.equal(motorcycleExample);
    });
  });

  describe('findAll', function () {
    it('should find all motorcycles successfully', async function () {
      sinon
        .stub(MotorcycleODM.prototype, 'findAll')
        .resolves([motorcycleExample]);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      const result = await motorcycleService.findAll();

      expect(result).to.deep.equal([motorcycleExample]);
    });
  });

  describe('findById', function () {
    it('should throw an error for invalid object ID', async function () {
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      try {
        await motorcycleService.findById(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidMongoID);
      }
    });

    it('should throw an error if a motorcycle is not found', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(MotorcycleODM.prototype, 'findById').resolves(null);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      try {
        await motorcycleService.findById(validId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(motorcycleNotFound);
      }
    });

    it('should find a motorcycle by id successfully', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon
        .stub(MotorcycleODM.prototype, 'findById')
        .resolves(motorcycleExample);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      const result = await motorcycleService.findById(validId);

      expect(result).to.deep.equal(motorcycleExample);
    });
  });

  describe('update', function () {
    const updatedMotorcycle = { ...motorcycleExample, color: 'Red' };

    it('should throw an error for a invalid object ID', async function () {
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      try {
        await motorcycleService.update(invalidId, motorcycleExample);
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidMongoID);
      }
    });

    it('should throw an error if motorcycle is not found', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(MotorcycleODM.prototype, 'update').resolves(null);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      try {
        await motorcycleService.update(validId, updatedMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal(motorcycleNotFound);
      }
    });

    it('should update a motorcycle successfully', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(MotorcycleODM.prototype, 'update').resolves(updatedMotorcycle);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      const result = await motorcycleService.update(validId, updatedMotorcycle);

      expect(result).to.deep.equal(updatedMotorcycle);
    });
  });

  describe('delete', function () {
    it('should throw an error for invalid object ID', async function () {
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      try {
        await motorcycleService.delete(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidMongoID);
      }
    });

    it('should throw an error if motorcycle is not found', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(MotorcycleODM.prototype, 'delete').resolves(null);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      try {
        await motorcycleService.delete(validId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(motorcycleNotFound);
      }
    });

    it('should delete a motorcycle successfully', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(MotorcycleODM.prototype, 'delete').resolves(motorcycleExample);
      const motorcycleService = new MotorcycleService(new MotorcycleODM());

      const result = await motorcycleService.delete(validId);

      expect(result).to.deep.equal(motorcycleExample);
    });
  });
});
