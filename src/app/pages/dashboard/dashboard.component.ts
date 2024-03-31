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
    private stateService: StateService
  ) {}

  // ngOnInit(): void {
  //   const code = localStorage.getItem('redirect');
  //   console.log(`Redirect code in Dash: ${code}`);

  //   if (code) {
  //     this.sendTokenToApi(code);
  //   } else {
  //     console.error('No code found in dashboard');
  //   }
  // }

  // sendTokenToApi(token: string): void {
  //   this.authService.postStravaAuth(token).subscribe(
  //     (response) => {
  //       //console.log('API Response:', response);
  //       this.createAthleteInfo(response);
  //     },
  //     (error) => {
  //       console.error('API Error:', error);
  //       // Handle error
  //     }
  //   );
  // }

  // createAthleteInfo(response: string): void {
  //   this.athleteInfo = JSON.parse(response);

  //   this.stateService.setMainUser(this.athleteInfo);

  //   console.log('Athlete Info:', this.athleteInfo);
  // }
}
