import { Component, inject } from '@angular/core';
import { ClimaTable } from '../../interfaces/clima-table';
import { ClimaServices } from '../../services/clima-services';


@Component({
  selector: 'app-clima',
  imports: [],
  standalone: true,
  templateUrl: './clima.html',
  styleUrl: './clima.css'
})


export class Clima {
  private climaService = inject(ClimaServices);
  climaData: any;
  date: Date = new Date();
  dataTable : ClimaTable[] = [];
}
