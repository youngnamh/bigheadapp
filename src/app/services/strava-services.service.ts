import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StravaServicesService {
  constructor() {
    var clientId: string = '123612';
    var clientSecret: string = 'a5530b9a4d2dbbd1a80a13a3789c36cda48f8cb9';
    var code: string = '';
    var authUrl: string =
      `https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`;
  }
}
