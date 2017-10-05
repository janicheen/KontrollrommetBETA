import { Entity, Property} from '../_models/index';
import { EntityToPropertyRelationCategory } from '../_categories/index';


export class EntityToPropertyRelation {
    id: number;
    person: Entity;
    property: Property;
    relation_category: EntityToPropertyRelationCategory;
}
