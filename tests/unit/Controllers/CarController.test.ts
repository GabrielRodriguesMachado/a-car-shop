import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';
import CarController from '../../../src/Controllers/CarController';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

const carMockInput: ICar = {
  model: 'Example',
  year: 2023,
  color: 'Black',
  status: true,
  buyValue: 20000,
  seatsQty: 5,
  doorsQty: 4,
};

const carMockOutput: ICar = {
  id: '507f1f77bcf86cd799439011',
  model: 'Example',
  year: 2023,
  color: 'Black',
  status: true,
  buyValue: 20000,
  seatsQty: 5,
  doorsQty: 4,
};

describe('CarController', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('create()', function () {
    it('should create a car and return 201 status code', async function () {
      const request = {
        body: carMockInput,
      } as Request;

      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon
        .stub(CarService.prototype, 'createCar')
        .resolves(carMockOutput);

      const next = (() => {}) as NextFunction;

      const controller = new CarController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.create();

      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  });

  describe('findAll()', function () {
    it('should return all cars and return 200 status code', async function () {
      const request = {} as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
  
      sinon.stub(CarService.prototype, 'findAll').resolves([carMockOutput]);
  
      const next = (() => {}) as NextFunction;
  
      const controller = new CarController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.findAll();
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('findById()', function () {
    it('should return a car by id and return 200 status code', async function () {
      const request = {
        params: { id: '634852326b35b59438fbea2f' },
      } as unknown as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
  
      sinon.stub(CarService.prototype, 'findById').resolves(carMockOutput);
  
      const next = (() => {}) as NextFunction;
  
      const controller = new CarController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.findById();
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('update()', function () {
    it('should update a car and return 200 status code', async function () {
      const request = {
        params: { id: '634852326b35b59438fbea2f' },
        body: carMockInput,
      } as unknown as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
  
      sinon.stub(CarService.prototype, 'update').resolves(carMockOutput);
  
      const next = (() => {}) as NextFunction;
  
      const controller = new CarController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.update();
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('delete()', function () {
    it('should delete a car and return 204 status code', async function () {
      const request = {
        params: { id: '634852326b35b59438fbea2f' },
      } as unknown as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().returnsThis(),
      };
  
      sinon.stub(CarService.prototype, 'delete').resolves();
  
      const next = (() => {}) as NextFunction;
  
      const controller = new CarController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.delete();
  
      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });
});
