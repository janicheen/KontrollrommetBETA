import { Person, Entity } from '../_models/index';
import { PersonToEntityRelationCategory } from '../_categories/index';

export class PersonToEntityRelation {
    id: number;
    person: Person;
    entity: Entity;
    relation_category: PersonToEntityRelationCategory;
}
