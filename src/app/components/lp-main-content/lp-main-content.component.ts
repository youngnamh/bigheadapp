import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-lp-main-content',
  standalone: true,
  imports: [ButtonComponent, RouterModule, FooterComponent],
  templateUrl: './lp-main-content.component.html',
  styleUrl: './lp-main-content.component.scss',
})
export class LpMainContentComponent {
  clientId: string = '123612';
  stravaAuth: string = `http://www.strava.com/oauth/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read`;
  clientSecret: string = 'cf0a978e472f1ac06eb9a8782e19766933276a9f';
  code: string = '';
  authUrl: string = `https://www.strava.com/api/v3/oauth/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&code=${this.code}&grant_type=authorization_code`;

  redirectToStrava() {
    console.log('hello');
    console.log(this.authUrl);
    window.open(this.stravaAuth, '_blank');
  }
}
