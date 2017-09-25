import { Person } from '../_models/index';
import { PersonToEntityRelation } from '../_models/index';
import { PropertyToPersonRelation } from '../_models/index';


export class User {
    // Basic data
    id: number;
    username: string;
    email: string;
    person: Person;
    // Extended data
    entity_relations: PersonToEntityRelation[];
    propery_relations: PropertyToPersonRelation[];
}
