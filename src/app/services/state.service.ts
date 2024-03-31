import { Injectable } from '@angular/core';
import { Athlete } from '../interfaces/Athlete';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private mainUser: Athlete | null = null;

  setMainUser(athlete: Athlete): void {
    this.mainUser = athlete;
  }

  getMainUser(): Athlete | null {
    return this.mainUser;
  }
}
