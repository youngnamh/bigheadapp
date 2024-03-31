import { Activity } from './Activity';

export interface Athlete {
  id: number;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
  listLength: number;
  activities: Activity[];
}
