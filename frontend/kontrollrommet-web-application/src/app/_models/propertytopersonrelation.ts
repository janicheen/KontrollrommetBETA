import { Person, Property} from '../_models/index';
import { PropertyToPersonRelationCategory } from '../_categories/index';


export class PropertyToPersonRelation {
    id: number;
    person: Person;
    property: Property;
    relation_category: PropertyToPersonRelationCategory;
}
