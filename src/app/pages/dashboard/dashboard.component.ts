import { Component } from '@angular/core';
import { DashContentComponent } from '../../components/dash-content/dash-content.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

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
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    console.log('DashboardComponent initialized');
    const code = localStorage.getItem('redirect');
    console.log(`Redirect code in Dash: ${code}`);

    this.getData(3);

    // if (code) {
    //   this.authService.getStravaData(code).subscribe(
    //     (data) => {
    //       console.log('Strava data: ', data);
    //     },
    //     (error) => {
    //       console.error('Error fetching Strava data');
    //     }
    //   );
    // }
  }

  getData(index: number): void {
    this.apiService.getShirt(index).subscribe(
      (data) => {
        console.log('Data fetched from shirts: ', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
