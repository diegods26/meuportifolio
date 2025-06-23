import { Component } from '@angular/core';
import { WeatherComponent } from "../weather.component";
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from '../../../models/weather-datas';
import { WeatherService } from '../../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-page',
  imports: [
    WeatherComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss'
})
export class WeatherPageComponent {
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName: string = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = '🔍';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: response => {
        response && (this.weatherDatas = response)
        console.log(this.weatherDatas);
      },
      error: error => console.log(error)
    })
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
