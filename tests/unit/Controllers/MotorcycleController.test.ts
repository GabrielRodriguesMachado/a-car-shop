import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';
import MotorcycleController from '../../../src/Controllers/MotorcycleController';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motoMockInput: IMotorcycle = {
  model: 'Test',
  year: 2022,
  color: 'Red',
  status: true,
  buyValue: 10000,
  category: 'Sport',
  engineCapacity: 600,
};

const motoMockOutput: IMotorcycle = {
  id: '634852326b35b59438fbea2f',
  model: 'Test',
  year: 2022,
  color: 'Red',
  status: true,
  buyValue: 10000,
  category: 'Sport',
  engineCapacity: 600,
};

describe('MotorcycleController', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('create()', function () {
    it('should create a motorcycle and return 201 status code', async function () {
      const request = {
        body: motoMockInput,
      } as Request;

      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };

      sinon
        .stub(MotorcycleService.prototype, 'createMotorcycle')
        .resolves(motoMockOutput);

      const next = (() => {}) as NextFunction;

      const controller = new MotorcycleController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.create();

      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  });

  describe('findAll()', function () {
    it('should return all motorcycles and return 200 status code', async function () {
      const request = {} as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
  
      sinon.stub(MotorcycleService.prototype, 'findAll').resolves([motoMockOutput]);
  
      const next = (() => {}) as NextFunction;
  
      const controller = new MotorcycleController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.findAll();
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('findById()', function () {
    it('should return a motorcycle by id and return 200 status code', async function () {
      const request = {
        params: { id: '634852326b35b59438fbea2f' },
      } as unknown as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
  
      sinon.stub(MotorcycleService.prototype, 'findById').resolves(motoMockOutput);
  
      const next = (() => {}) as NextFunction;
  
      const controller = new MotorcycleController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.findById();
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('update()', function () {
    it('should update a motorcycle and return 200 status code', async function () {
      const request = {
        params: { id: '634852326b35b59438fbea2f' },
        body: motoMockInput,
      } as unknown as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub().returnsThis(),
      };
  
      sinon.stub(MotorcycleService.prototype, 'update').resolves(motoMockOutput);
  
      const next = (() => {}) as NextFunction;
  
      const controller = new MotorcycleController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.update();
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe('delete()', function () {
    it('should delete a motorcycle and return 204 status code', async function () {
      const request = {
        params: { id: '634852326b35b59438fbea2f' },
      } as unknown as Request;
  
      const response = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub().returnsThis(),
      };
  
      sinon.stub(MotorcycleService.prototype, 'delete').resolves();
  
      const next = (() => {}) as NextFunction;
  
      const controller = new MotorcycleController(
        request,
        response as unknown as Response,
        next,
      );
      await controller.delete();
  
      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });
});
