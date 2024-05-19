import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeatherEntity } from './weather.entity';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(WeatherEntity)
    private weatherRepository: Repository<WeatherEntity>,
  ) {}

  async fetchAndSaveWeather(lat: number, lon: number) {
    try {
      const response = await this.httpService.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`).toPromise();
      const createdWeather = this.weatherRepository.create({
        lat,
        lon,
        data: response.data
      });
      return this.weatherRepository.save(createdWeather);
    } catch (error) {
      console.error('Failed to fetch or save weather data:', error);
      return error;
    }
  }

  async getWeather(lat: number, lon: number) {
    try {
      return await this.weatherRepository.findOneBy({ lat, lon });
    } catch (error) {
      return error;
    }
  }
}