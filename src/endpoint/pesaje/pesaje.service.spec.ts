import { Test, TestingModule } from '@nestjs/testing';
import { PesajeService } from './pesaje.service';

describe('PesajeService', () => {
  let service: PesajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PesajeService],
    }).compile();

    service = module.get<PesajeService>(PesajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
