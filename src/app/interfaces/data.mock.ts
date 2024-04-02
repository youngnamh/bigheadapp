import { Group } from './Group';
import { Athlete } from './Athlete';
import { Activity } from './Activity';

export const ATHLETES: Athlete[] = [
  {
    id: 5000,
    firstname: 'Feven',
    lastname: 'Araya',
    AccessToken: 'abc123',
    RefreshToken: 'def456',
    listLength: 5,
    Activities: [
      { start_date: '2024-03-01T12:04:53Z', type: 'Run', distance: 5236 },
      { start_date: '2024-03-03T12:04:53Z', type: 'Run', distance: 1027 },
      { start_date: '2024-03-07T12:04:53Z', type: 'Run', distance: 2456 },
      { start_date: '2024-03-08T12:04:53Z', type: 'Run', distance: 8112 },
      { start_date: '2024-03-10T12:04:53Z', type: 'Cycling', distance: 1507 },
    ],
    Groups: ['A1001'],
    Friends: [64603272],
  },
  {
    id: 5001,
    firstname: 'Koichi',
    lastname: 'Minami',
    AccessToken: 'ghi789',
    RefreshToken: 'jkl012',
    listLength: 7,
    Activities: [
      { start_date: '2024-03-01T12:04:53Z', type: 'Run', distance: 7002 },
      { start_date: '2024-03-05T12:04:53Z', type: 'Cycling', distance: 2945 },
      { start_date: '2024-03-06T12:04:53Z', type: 'Swimming', distance: 3472 },
      { start_date: '2024-03-09T12:04:53Z', type: 'Run', distance: 9681 },
      { start_date: '2024-03-10T12:04:53Z', type: 'Cycling', distance: 1807 },
      { start_date: '2024-03-12T12:04:53Z', type: 'Run', distance: 6210 },
      { start_date: '2024-03-19T12:04:53Z', type: 'Cycling', distance: 1184 },
    ],
    Groups: ['A1001'],
    Friends: [64603272],
  },
  {
    id: 5002,
    firstname: 'Rory',
    lastname: 'Kilduff',
    AccessToken: 'mno345',
    RefreshToken: 'pqr678',
    listLength: 8,
    Activities: [
      { start_date: '2024-03-03T08:30:45Z', type: 'Run', distance: 6325 },
      { start_date: '2024-03-05T12:55:20Z', type: 'Cycling', distance: 9238 },
      { start_date: '2024-03-07T14:10:10Z', type: 'Swimming', distance: 4523 },
      { start_date: '2024-03-09T10:25:00Z', type: 'Run', distance: 4028 },
      { start_date: '2024-03-11T16:40:30Z', type: 'Cycling', distance: 9427 },
      { start_date: '2024-03-13T09:15:55Z', type: 'Run', distance: 5261 },
      { start_date: '2024-03-15T13:30:25Z', type: 'Cycling', distance: 4265 },
      { start_date: '2024-03-17T17:45:10Z', type: 'Run', distance: 9251 },
    ],
    Groups: ['A1000'],
    Friends: [64603272],
  },
];

export const GROUPS: Group[] = [
  {
    groupId: 'A1000',
    groupName: 'Saskatoon friends',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    athletes: [ATHLETES[2]],
  },
  {
    groupId: 'A1001',
    groupName: 'East Coast',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    athletes: [ATHLETES[0], ATHLETES[1]],
  },
];
