import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-dash-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-body.component.html',
  styleUrl: './dash-body.component.css',
})
export class DashBodyComponent {
  constructor(private stateService: StateService) {}
  participants = [
    { name: 'Dave' },
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Doe' },
    { name: 'Smith' },
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'Eve' },
    { name: 'Mallory' },
  ];
}
