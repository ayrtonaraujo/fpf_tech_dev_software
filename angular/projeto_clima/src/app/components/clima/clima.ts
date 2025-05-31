import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { ClimaService } from '../../services/clima-services';
import { ClimaTable } from '../../interfaces/clima-table';

@Component({
  selector: 'app-clima',
  imports: [CommonModule], // Adicione CommonModule aqui
  standalone: true,
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})
export class Clima {
  private climaService = inject(ClimaService);
  private cdr = inject(ChangeDetectorRef);

  climaData: any = { latitude: null, longitude: null, elevation: null, current: { temperature_2m: null, wind_speed_10m: null } };
  
  date: Date = new Date();
  dataTable: ClimaTable[] = [];

  subtrair4horas(dataEmString: string) {
    let novaData = new Date(dataEmString);
    novaData.setHours(novaData.getHours() - 4);
    return novaData;
  }

  ngOnInit() {
    this.climaService.getClima().subscribe((response: any) => {
      this.climaData = response;
      this.date = this.subtrair4horas(response.current.time);
      this.dataTable = response.hourly.time.map((t: string, i: number) => ({
        time: this.subtrair4horas(t),
        temperature: response.hourly.temperature_2m[i],
        humidity: response.hourly.relative_humidity_2m[i],
        windSpeed: response.hourly.wind_speed_10m[i]
      }));
      this.cdr.detectChanges();
    });
  }
}