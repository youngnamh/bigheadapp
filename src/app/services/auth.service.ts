import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly bigHeadApiUrl =
    'https://2knpwzb4sko65zqxwlmmbal5zm0hztwt.lambda-url.us-east-2.on.aws/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getCodeFromUrl(): string | null {
    const fullUrl = window.location.href;
    const code = this.route.snapshot.queryParamMap.get('code');

    console.log(`fullUrl: ${fullUrl}`);
    console.log(`code: ${code}`);

    return this.route.snapshot.queryParamMap.get('code');
  }

  postStravaAuth(aCode: string): Observable<any> {
    const body = { code: aCode };
    const apiUrl = this.bigHeadApiUrl + 'api/strava';
    console.log(`apiUrl: ${apiUrl}`);
    return this.http.post<any>(apiUrl, body, this.httpOptions);
  }

  getStravaAuth(): Observable<any> {
    const apiUrl = this.bigHeadApiUrl + 'api/strava';
    console.log(`apiUrl: ${apiUrl}`);
    return this.http.get<any>(apiUrl);
  }
}
