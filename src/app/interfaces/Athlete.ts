import { Activity } from './Activity';

export interface Athlete {
  id: number;
  firstname: string;
  lastname: string;
  AccessToken: string;
  RefreshToken: string;
  listLength: number;
  Activities: Activity[];
  Groups: string[];
  Friends: number[];
}
