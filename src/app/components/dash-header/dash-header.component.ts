import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dash-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dash-header.component.html',
  styleUrl: './dash-header.component.css',
})
export class DashHeaderComponent {
  title: string = 'Dashboard';
}
