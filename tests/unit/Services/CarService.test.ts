import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import ICar from '../../../src/Interfaces/ICar';

describe('CarService', function () {
  afterEach(function () {
    sinon.restore();
  });

  const carExample: ICar = {
    id: '507f1f77bcf86cd799439011',
    model: 'Example',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 20000,
    seatsQty: 5,
    doorsQty: 4,
  };

  describe('createCar', function () {
    it('should create a car successfully', async function () {
      sinon.stub(CarODM.prototype, 'create').resolves(carExample);
      const carService = new CarService(new CarODM());

      const result = await carService.createCar(carExample);

      expect(result).to.deep.equal(carExample);
    });
  });

  describe('findAll', function () {
    it('should find all cars successfully', async function () {
      sinon.stub(CarODM.prototype, 'findAll').resolves([carExample]);
      const carService = new CarService(new CarODM());

      const result = await carService.findAll();

      expect(result).to.deep.equal([carExample]);
    });
  });

  describe('findById', function () {
    it('should throw an error for invalid object ID', async function () {
      const invalidId = 'invalid-id';
      const carService = new CarService(new CarODM());

      try {
        await carService.findById(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('should throw an error if car is not found', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(CarODM.prototype, 'findById').resolves(null);
      const carService = new CarService(new CarODM());

      try {
        await carService.findById(validId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });

    it('should find a car by ID successfully', async function () {
      const validId = '507f1f77bcf86cd799439011';
      sinon.stub(CarODM.prototype, 'findById').resolves(carExample);
      const carService = new CarService(new CarODM());

      const result = await carService.findById(validId);

      expect(result).to.deep.equal(carExample);
    });
  });
});
