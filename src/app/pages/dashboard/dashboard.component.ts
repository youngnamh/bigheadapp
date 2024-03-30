import { Component } from '@angular/core';
import { DashContentComponent } from '../../components/dash-content/dash-content.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const code = localStorage.getItem('redirect');
    console.log(`Redirect code in Dash: ${code}`);

    if (code) {
      this.authService.postStravaAuth(code).subscribe(
        (data) => {
          console.log('Strava data: ', data);
        },
        (error) => {
          console.error('Error fetching Strava data');
        }
      );
    }
  }
}
