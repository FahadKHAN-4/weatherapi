import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherEntity } from './weather.entity';
import { HttpModule } from '@nestjs/axios';  

@Module({
  imports: [
    TypeOrmModule.forFeature([WeatherEntity]),
    HttpModule,  
  ],
  providers: [WeatherService],
  controllers: [WeatherController]
})
export class WeatherModule {}