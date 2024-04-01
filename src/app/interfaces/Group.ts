import { Athlete } from './Athlete';

export interface Group {
  groupId: string;
  groupName: string;
  startDate: string;
  endDate: string;
  athletes: Athlete[];
}
