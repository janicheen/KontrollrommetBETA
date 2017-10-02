import { Person } from '../_models/index';
import { PersonToEntityRelation } from '../_models/index';
import { PropertyToPersonRelation } from '../_models/index';


export class User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    // Added data
    person: Person;
    // Extended data
    entity_relations: PersonToEntityRelation[];
    propery_relations: PropertyToPersonRelation[];
}
