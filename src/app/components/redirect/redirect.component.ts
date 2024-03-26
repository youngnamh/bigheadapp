import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css',
})
export class RedirectComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const redirectUrl = this.route.snapshot.queryParamMap.get('redirect');
    const redirectCode = this.route.snapshot.queryParamMap.get('code');
    console.log('Redirect Code: ', redirectCode);
    console.log('queryMap: ', this.route.snapshot.queryParamMap);

    // If a redirect URL is found, navigate to it
    if (redirectUrl) {
      // Save the original URL in localStorage or any other storage method
      localStorage.setItem('originalRedirect', redirectUrl);

      // Navigate to the desired route
      this.router.navigateByUrl('/dashboard');
    } else {
      // Handle if no redirect URL is found
      console.error('No redirect URL found');
    }
  }
}
