import { Component, OnInit } from '@angular/core';
import { WeatherPageComponent } from "../wheather/weather-page/weather-page.component";
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  imports: [WeatherPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  emoji = '👨‍💻'

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getTemperaturas();
  }

  getTemperaturas() {
    this.weatherService.getWeatherDatas('São Paulo').subscribe({
      next: response => {
        console.log(response)
      }
    })
  }
}
