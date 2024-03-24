import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: ActivatedRoute) {}

  getCodeFromUrl(): string | null {
    return this.route.snapshot.queryParamMap.get('code');
  }
}
