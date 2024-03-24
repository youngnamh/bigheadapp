import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingPageComponent,
    RouterModule,
    AuthPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bigheadapp';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const code = this.authService.getCodeFromUrl();
    if (code) {
      console.log('code from Url:', code);
      //navigate to dashboard route
      this.router.navigate(['/dashboard']);
    } else {
      console.log('no code in Url');
    }
  }
}
