import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewFeatureModule } from './new-feature/new-feature.module';

@Module({
  imports: [NewFeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
