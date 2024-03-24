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
  stravaAuth: string =
    'http://www.strava.com/oauth/authorize?client_id=123612&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read';
  clientId: string = '123612';
  clientSecret: string = 'a5530b9a4d2dbbd1a80a13a3789c36cda48f8cb9';
  code: string = '';
  authUrl: string = `https://www.strava.com/api/v3/oauth/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&code=${this.code}&grant_type=authorization_code`;

  redirectToStrava() {
    console.log('hello');
    console.log(this.authUrl);
    //window.open(this.stravaAuth, '_blank');
  }
}
