import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaServices {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';
  private latitude = -3.1171034;
  private longitude = -60.025780;


  getClima (): Observable<any> {
    const params = [
      'latitude=${this.latitude}',
      'longitude=${this.longitude}',
      'current=temperature_2m, wind_speed_10m',
      'hourly=temperature_2m, relative_humidity_2m, wind_speed_10m'
    ].join('&');

    return this.http.get('${this.apiUrl}?${params}');
  }

  // getClimaData (): Observable<any> {
  //   return this.http.get('https://api.open-meteo.com/v1/forecast');

  // }
}


