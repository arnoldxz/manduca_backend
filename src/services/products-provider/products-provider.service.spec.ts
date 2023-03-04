import { Test, TestingModule } from '@nestjs/testing';
import { ProductsProviderService } from './products-provider.service';

describe('ProductsProviderService', () => {
  let service: ProductsProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsProviderService],
    }).compile();

    service = module.get<ProductsProviderService>(ProductsProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
