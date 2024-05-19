import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        const { sunrise, sunset, temp, feels_like, pressure, humidity, uvi, wind_speed } = data.data.current;
        return {
          sunrise,
          sunset,
          temp,
          feels_like,
          pressure,
          humidity,
          uvi,
          wind_speed
        };
      })
    );
  }
}