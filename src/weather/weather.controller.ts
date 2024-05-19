import { Controller, Post, Body, Get, Query, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherInterceptor } from './interceptors/weather.interceptor';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) { }

    @Post('savetodb')
    async saveToMongodb(@Body() body: any) {
        return this.weatherService.fetchAndSaveWeather(body.lat, body.lon);
    }

    @UseInterceptors(WeatherInterceptor)
    @Get('getweather')
    async find(@Query() query: any) {
        const lat = parseFloat(query.lat);
        const lon = parseFloat(query.lon);
        if (isNaN(lat) || isNaN(lon)) {
            throw new HttpException('Invalid latitude or longitude', HttpStatus.BAD_REQUEST);
        }
        return this.weatherService.getWeather(lat, lon);
    }
}
