import { Entity, Plan} from '../_models/index';
import { EntityToPlanRelationCategory } from '../_categories/entitytoplanrelationcategory';


export class EntityToPlanRelation {
    id: number;
    entity: Entity;
    plan: Plan;
    relation_category: EntityToPlanRelationCategory;
}
