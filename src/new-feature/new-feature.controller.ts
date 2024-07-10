import { Controller, Get } from '@nestjs/common';
import { NewFeatureService } from './new-feature.service';

@Controller('newFeature')
export class NewFeatureController {
    constructor(private readonly newFeatureService: NewFeatureService) { }

    @Get()
    async getNewFeatureData() {
        return this.newFeatureService.getNewFeatureData();
    }
}
