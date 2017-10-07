import { PlanCategory } from '../_categories/plancategory';

export class Plan {
    id: number;
    headline: string;
    description: string;
    category: PlanCategory;
}
