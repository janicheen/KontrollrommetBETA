from rest_framework.serializers import ModelSerializer
from pep_par_relations.models import PersonToActionRelationCategory, ActionToEntityRelationCategory, EntityToPlanRelationCategory, PlanToPropertyRelationCategory, PropertyToResultRelationCategory, ResultToPersonRelationCategory, PlanToPersonRelationCategory, ActionToPropertyRelationCategory, ResultToEntityRelationCategory, PersonToActionRelation, ActionToEntityRelation, EntityToPlanRelation, PlanToPropertyRelation, PropertyToResultRelation, ResultToPersonRelation, PlanToPersonRelation, ActionToPropertyRelation, ResultToEntityRelation


class PersonToActionRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PersonToActionRelationCategory
        depth = 1
        fields = '__all__'


class ActionToEntityRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = ActionToEntityRelationCategory
        depth = 1
        fields = '__all__'


class EntityToPlanRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = EntityToPlanRelationCategory
        depth = 1
        fields = '__all__'


class PlanToPropertyRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PlanToPropertyRelationCategory
        depth = 1
        fields = '__all__'


class PropertyToResultRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PropertyToResultRelationCategory
        depth = 1
        fields = '__all__'


class ResultToPersonRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = ResultToPersonRelationCategory
        depth = 1
        fields = '__all__'


class PlanToPersonRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PlanToPersonRelationCategory
        depth = 1
        fields = '__all__'


class ActionToPropertyRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = ActionToPropertyRelationCategory
        depth = 1
        fields = '__all__'


class ResultToEntityRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = ResultToEntityRelationCategory
        depth = 1
        fields = '__all__'


class PersonToActionRelationSerializer(ModelSerializer):

    class Meta:
        model = PersonToActionRelation
        depth = 1
        fields = '__all__'


class ActionToEntityRelationSerializer(ModelSerializer):

    class Meta:
        model = ActionToEntityRelation
        depth = 1
        fields = '__all__'


class EntityToPlanRelationSerializer(ModelSerializer):

    class Meta:
        model = EntityToPlanRelation
        depth = 1
        fields = '__all__'


class PlanToPropertyRelationSerializer(ModelSerializer):

    class Meta:
        model = PlanToPropertyRelation
        depth = 1
        fields = '__all__'


class PropertyToResultRelationSerializer(ModelSerializer):

    class Meta:
        model = PropertyToResultRelation
        depth = 1
        fields = '__all__'


class ResultToPersonRelationSerializer(ModelSerializer):

    class Meta:
        model = ResultToPersonRelation
        depth = 1
        fields = '__all__'


class PlanToPersonRelationSerializer(ModelSerializer):

    class Meta:
        model = PlanToPersonRelation
        depth = 1
        fields = '__all__'


class ActionToPropertyRelationSerializer(ModelSerializer):

    class Meta:
        model = ActionToPropertyRelation
        depth = 1
        fields = '__all__'


class ResultToEntityRelationSerializer(ModelSerializer):

    class Meta:
        model = ResultToEntityRelation
        depth = 1
        fields = '__all__'
