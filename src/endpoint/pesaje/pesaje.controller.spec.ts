import { Test, TestingModule } from '@nestjs/testing';
import { PesajeController } from './pesaje.controller';

describe('PesajeController', () => {
  let controller: PesajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PesajeController],
    }).compile();

    controller = module.get<PesajeController>(PesajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
