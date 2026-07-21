import { Component, signal } from '@angular/core';
import { Employee } from '../model/employeeModel';

@Component({
  selector: 'app-dash-board',
  imports: [],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.scss',
})
export class DashBoard {
  salesValue = signal<number>(75000);
  targetValue = signal<number>(1000);
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
}
