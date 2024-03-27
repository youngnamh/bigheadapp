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
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // get the full url from the browser
    const code = this.route.snapshot.queryParamMap.get('code');
    if (code) {
      console.log(`Setting redirect code in localStorage: ${code}`);
      localStorage.setItem('redirect', code);

      // Navigate to the desired route
      this.router.navigateByUrl('/dashboard');
    } else {
      // Handle if no redirect URL is found
      console.error('No redirect URL found');
    }
  }
}
