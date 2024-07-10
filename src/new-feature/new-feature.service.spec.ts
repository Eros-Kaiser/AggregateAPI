import { Test, TestingModule } from '@nestjs/testing';
import { NewFeatureService } from './new-feature.service';

describe('NewFeatureService', () => {
  let service: NewFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewFeatureService],
    }).compile();

    service = module.get<NewFeatureService>(NewFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
