import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: ActivatedRoute) {}

  getCodeFromUrl(): string | null {
    const fullUrl = window.location.href;
    console.log(`fullUrl: ${fullUrl}`);
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log(`code: ${code}`);
    return this.route.snapshot.queryParamMap.get('code');
  }
}
