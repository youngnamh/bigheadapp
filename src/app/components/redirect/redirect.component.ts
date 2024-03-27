import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css',
})
export class RedirectComponent {
  redirectCode!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // get the full url from the browser
    const code = this.authService.getCodeFromUrl();
    if (code) {
      this.redirectCode = code;
    }

    // If a redirect URL is found, navigate to it
    if (this.redirectCode) {
      // Save the original URL in localStorage or any other storage method
      console.log(
        `Setting redirect code in localStorage: ${this.redirectCode}`
      );
      localStorage.setItem('redirect', this.redirectCode);

      // Navigate to the desired route
      this.router.navigateByUrl('/dashboard');
    } else {
      // Handle if no redirect URL is found
      console.error('No redirect URL found');
    }
  }
}
