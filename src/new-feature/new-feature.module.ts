import { Module } from '@nestjs/common';
import { NewFeatureService } from './new-feature.service';
import { NewFeatureController } from './new-feature.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [NewFeatureService],
    controllers: [NewFeatureController]
})
export class NewFeatureModule { }
