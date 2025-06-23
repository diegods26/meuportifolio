import { Component, Input } from '@angular/core';
import { WeatherDatas } from '../../models/weather-datas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  @Input() weatherDatas!: WeatherDatas;

  minTemperatureIcon = '<i class="fas fa-temperature-low"></i>';
  maxTemperatureIcon = '<i class="fas fa-temperature-high"></i>' //faTemperatureHigh;
  humidityIcon = '💧' //faDroplet;
  windIcon = '🌬️';
}
