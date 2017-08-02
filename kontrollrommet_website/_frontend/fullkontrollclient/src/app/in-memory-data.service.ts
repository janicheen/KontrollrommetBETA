import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meetings = [
      { 
      id: 1,
      meeting_category: 2,
      entity: 1,
      },
      {
      id: 2,
      meeting_category: 2,
      entity: 3,
      },
    ];
    return {meetings};
  }
}