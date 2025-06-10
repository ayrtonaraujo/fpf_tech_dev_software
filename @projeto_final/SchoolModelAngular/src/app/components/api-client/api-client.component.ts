import { inject, Component } from '@angular/core';
import {EscolaService} from '../../services/escola.service';
import {FormsModule} from '@angular/forms';
import {Client} from '../../interfaces/Escola';

@Component({
  selector: 'app-api-client',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './api-client.component.html',
  styleUrl: './api-client.component.css'
})
export class ApiClientComponent {
  private escolaService = inject(EscolaService)
  clientList: Client[] = [];
  newClient: Partial<Client> = {name: '', age: 18, rg: '', cpf: ''};

  ngOnInit() {
    this.escolaService.getClients()
      .subscribe({
        next: (response: Client[]) => {
          this.clientList = response;
        },
        error: (err) => {
          console.error('Erro ao carregar clientes:', err);
        }
      });
  }

  deleteClient(id: number) {
    this.escolaService.deleteClient(id).subscribe({
      next: () => {
        this.clientList = this.clientList.filter(c => c.id !== id);
      },
      error: (err) => {
        console.error('Erro ao deletar cliente:', err);
      }
    });
  }

  createClient() {
    this.escolaService.saveClient(this.newClient as Client).subscribe({
      next: (response: any) => {
        // this.clientList.push(response);
        this.newClient = { name: '', age: 18, rg: '', cpf: '' };
        this.ngOnInit();
      },
      error: (err) => {
        console.error('Erro ao salvar cliente:', err);
      }
    });
  }
}
