import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STRAVA_AUTH_URL = 'https://www.strava.com/oauth/token';
  private readonly CLIENT_ID = '123612';
  private readonly CLIENT_SECRET = 'cf0a978e472f1ac06eb9a8782e19766933276a9f';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getCodeFromUrl(): string | null {
    const fullUrl = window.location.href;
    const code = this.route.snapshot.queryParamMap.get('code');

    console.log(`fullUrl: ${fullUrl}`);
    console.log(`code: ${code}`);

    return this.route.snapshot.queryParamMap.get('code');
  }

  getStravaData(redirectCode: string): Observable<any> {
    const params = {
      client_id: this.CLIENT_ID,
      client_secret: this.CLIENT_SECRET,
      code: redirectCode,
      grant_type: 'authorization_code',
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<any>(this.STRAVA_AUTH_URL, { params, ...options });
  }
}
