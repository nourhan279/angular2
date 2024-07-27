import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherview',
  templateUrl: './weatherview.component.html',
  styleUrls: ['./weatherview.component.scss'],
})
export class WeatherviewComponent {
  city: string = '';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weather = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
