import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnclosuresModule } from './enclosures/enclosures.module';

@Module({
  imports: [EnclosuresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
