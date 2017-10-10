# Django Dependencies
from rest_framework.serializers import ModelSerializer
# Category models
from process.models import PlanCategory, ActionCategory, ResultCategory 
from process.models import PlanToActionRelationCategory, ActionToResultRelationCategory, ResultToPlanRelationCategory 
# Core Models
from process.models import Plan, Action, Result
# Relational Models
from process.models import PlanToActionRelation, ActionToResultRelation, ResultToPlanRelation

### Category Models ###

# Plan Category
class PlanCategorySerializer(ModelSerializer):

    class Meta:
        model = PlanCategory
        depth = 0
        fields = '__all__'


# Action Category
class ActionCategorySerializer(ModelSerializer):

    class Meta:
        model = ActionCategory
        depth = 0
        fields = '__all__'

# Result Category
class ResultCategorySerializer(ModelSerializer):

    class Meta:
        model = ResultCategory
        depth = 0
        fields = '__all__'

# Plan to Action Relation Category
class PlanToActionRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PlanToActionRelationCategory
        depth = 0
        fields = '__all__'

#  Action To Result Relation Category
class ActionToResultRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = ActionToResultRelationCategory
        depth = 0
        fields = '__all__'

#  Result to Plan Relation Category
class ResultToPlanRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = ResultToPlanRelationCategory
        depth = 0
        fields = '__all__'

### Pure data model serializers

#  Plan
class PlanSerializer(ModelSerializer):

    class Meta:
        model = Plan
        depth = 1
        fields = '__all__'

# Action
class ActionSerializer(ModelSerializer):

    class Meta:
        model = Action
        depth = 0
        fields = '__all__'

# Result
class ResultSerializer(ModelSerializer):

    class Meta:
        model = Result
        depth = 0
        fields = '__all__'


### Relational models

# Plan to Action
class PlanToActionRelationSerializer(ModelSerializer):

    class Meta:
        model = PlanToActionRelation
        depth = 1
        fields = '__all__'

# Action to Result
class ActionToResultRelationSerializer(ModelSerializer):

    class Meta:
        model = ActionToResultRelation
        depth = 1
        fields = '__all__'

# Result To Plan
class ResultToPlanRelationSerializer(ModelSerializer):

    class Meta:
        model = ResultToPlanRelation
        depth = 1
        fields = '__all__'