import { Component } from '@angular/core';
import { DashContentComponent } from '../../components/dash-content/dash-content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
