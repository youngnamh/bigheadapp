import { Component } from '@angular/core';
import { DashContentComponent } from '../../components/dash-content/dash-content.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Athlete } from '../../interfaces/Athlete';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private athleteInfo!: Athlete;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const code = localStorage.getItem('redirect');
    console.log(`Redirect code in Dash: ${code}`);

    // if (code) {
    //   this.authService.postStravaAuth(code).subscribe(
    //     (data) => {
    //       console.log('Strava data: ', data);
    //     },
    //     (error) => {
    //       console.error('Error fetching Strava data');
    //     }
    //   );
    // }

    if (code) {
      this.sendTokenToApi(code);
    } else {
      console.error('No code found in dashboard');
    }
  }

  sendTokenToApi(token: string): void {
    this.authService.postStravaAuth(token).subscribe(
      (response) => {
        //console.log('API Response:', response);
        this.createAthleteInfo(response);
      },
      (error) => {
        console.error('API Error:', error);
        // Handle error
      }
    );
  }

  createAthleteInfo(response: string): void {
    this.athleteInfo = JSON.parse(response);

    console.log('Athlete Info:', this.athleteInfo);
  }
}
