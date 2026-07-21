import { Component, signal } from '@angular/core';
import { Employee } from '../model/employeeModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  imports: [CommonModule],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.scss',
})
export class DashBoard {
  salesValue = signal<number>(45000);
  targetValue = signal<number>(100000);
  isActive = signal<boolean>(false);
  performance = signal<string>('average'); //options: poor, average, excellent
  statusColor = signal<string>('green');

  //Employee data for list demonstrations
  employees = signal<Employee[]>(
    [
      { id: 1, name: 'John Smith', role: 'Manager', salary: 85000 },
      { id: 2, name: 'Sarah Johnson', role: 'Developer', salary: 75000 },
      { id: 3, name: 'Mike Davis', role: 'Designer', salary: 65000 }
    ]);

  getPerformanceColor(): string {
    const percentage = (this.salesValue() / this.targetValue()) * 100;
    if (percentage < 50)
      return 'red';
    else if (percentage < 80)
      return 'orange';
    else
      return 'green';
  }
  getPerformanceClass(): string
  {
    const percentage = (this.salesValue() / this.targetValue()) * 100;
    if (percentage < 50)
      return 'danger';
    else if (percentage < 80)
      return 'warning';
    else
      return 'success';
  }

}
