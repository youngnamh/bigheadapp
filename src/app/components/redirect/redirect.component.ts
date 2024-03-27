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
    // get the full url from the browser
    const fullUrl = window.location.href;
    const redirectCode = this.route.snapshot.queryParamMap.get('code');
    console.log('Redirect Code: ', redirectCode);
    console.log('Redirect URL: ', fullUrl);

    // If a redirect URL is found, navigate to it
    if (redirectCode) {
      // Save the original URL in localStorage or any other storage method
      localStorage.setItem('originalRedirect', redirectCode);

      // Navigate to the desired route
      this.router.navigateByUrl('/dashboard');
    } else {
      // Handle if no redirect URL is found
      console.error('No redirect URL found');
    }
  }
}
