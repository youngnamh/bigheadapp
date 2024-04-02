import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';
import { Athlete } from '../../interfaces/Athlete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import BrowserAnimationsModule from '@angular/platform-browser/animations';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css',
})
export class RedirectComponent {
  private athleteInfo!: Athlete;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    // get the full url from the browser
    const currentUrl = window.location.href;
    const code = this.route.snapshot.queryParamMap.get('code');
    if (code) {
      //console.log(`Setting redirect code in localStorage: ${code}`);
      if (code) {
        this.sendTokenToApi(code);
      } else {
        console.error('No code found in dashboard');
      }
    } else {
      // Handle if no redirect URL is found
      console.error('No redirect URL found');
    }
  }

  sendTokenToApi(token: string): void {
    this.authService.postStravaAuth(token).subscribe(
      (response) => {
        //console.log('API Response:', response);
        this.createAthleteInfo(response);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.error('API Error:', error);
        // Handle error
      }
    );
  }

  createAthleteInfo(response: string): void {
    this.athleteInfo = JSON.parse(response);

    this.stateService.setMainUser(this.athleteInfo);

    console.log('Athlete Info:', this.athleteInfo);
  }
}
