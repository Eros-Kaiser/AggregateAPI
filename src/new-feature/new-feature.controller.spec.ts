import { Test, TestingModule } from '@nestjs/testing';
import { NewFeatureController } from './new-feature.controller';

describe('NewFeatureController', () => {
  let controller: NewFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewFeatureController],
    }).compile();

    controller = module.get<NewFeatureController>(NewFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
