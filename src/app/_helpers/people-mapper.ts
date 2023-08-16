import { map } from 'rxjs/operators';
import { PeopleGoRest } from '../_models';

// Old Approach (Out of use)
export const mapPeopleGoRest = map((data: any[]): PeopleGoRest[] => {
    return data.map((people: any): PeopleGoRest => {
      return {
        id: people.id,
        name: people.name,
        email: people.email,
        gender: people.gender,
        status: people.status
      };
    });
  });
