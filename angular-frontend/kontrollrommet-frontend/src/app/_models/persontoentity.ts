import { Person, Entity } from '../_models/index';

export class PersonToEntity {
    id: number;
    person: Person;
    entity: Entity;
    person_to_entity_relation_name: string; 
}