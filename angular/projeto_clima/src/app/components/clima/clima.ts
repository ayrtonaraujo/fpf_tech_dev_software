import { inject, Component } from '@angular/core';
import {ClimaService} from '../../services/clima-services';
import {ClimaTable} from '../../interfaces/clima-table';

@Component({
  selector: 'app-clima',
  imports: [],
  standalone: true,
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})

export class Clima {
  private climaService = inject(ClimaService);
  climaData:any;
  date: Date = new Date();
  dataTable:ClimaTable[] = [];

  subtrair4horas(dataEmString:string) {
    let novaData = new Date(dataEmString);
    novaData.setHours(novaData.getHours() - 4);
    return novaData;
  }

  // climaData: any = { current: {} };

  ngOnInit(){
    this.climaService.getClima()
      .subscribe((response:any) => {
        this.climaData = response;
        this.date = this.subtrair4horas(response.current.time);
        this.dataTable = response.hourly.time.map((t:string, i:number) => ({
          time: this.subtrair4horas(t),
          temperature: response.hourly.temperature_2m[i],
          humidity: response.hourly.relative_humidity_2m[i],
          windSpeed: response.hourly.wind_speed_10m[i]
        }));
      });
  }
}