import {Component, inject} from '@angular/core';
import {EscolaService} from '../../services/escola.service';
import {FormsModule} from '@angular/forms';
import {Employee} from '../../interfaces/Escola';

@Component({
  selector: 'app-api-employee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './api-employee.component.html',
  styleUrl: './api-employee.component.css'
})
export class ApiEmployeeComponent {
  private escolaService = inject(EscolaService)
  employeeList: Employee[] = [];
  newEmployee: Partial<Employee> = {name: '', registration: '', active: true, created_at: new Date(), modified_at: new Date()};

  ngOnInit() {
    this.escolaService.getEmployees()
      .subscribe({
        next: (response: Employee[]) => {
          this.employeeList = response;
        },
        error: (err) => {
          console.error('Erro ao carregar vendedores:', err);
        }
      });
  }

  deleteEmployee(id: number) {
    this.escolaService.deleteEmployee(id).subscribe({
      next: () => {
        this.employeeList = this.employeeList.filter(c => c.id !== id);
      },
      error: (err) => {
        console.error('Erro ao deletar vendedor:', err);
      }
    });
  }

  createEmployee() {
    this.escolaService.saveEmployee(this.newEmployee as Employee).subscribe({
      next: (response: any) => {
        this.newEmployee = {name: '', registration: '', active: true, created_at: new Date(), modified_at: new Date()};
        this.ngOnInit();
      },
      error: (err) => {
        console.error('Erro ao salvar vendedor:', err);
      }
    });
  }
}
