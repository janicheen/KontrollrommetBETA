from rest_framework.serializers import ModelSerializer
from process_control.models import SubjectToEntityRelationCategory, Case, Subject, SubjectToEntityRelation


class SubjectToEntityRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = SubjectToEntityRelationCategory
        depth = 0
        fields = '__all__'


class CaseSerializer(ModelSerializer):

    class Meta:
        model = Case
        depth = 0
        fields = '__all__'


class SubjectSerializer(ModelSerializer):

    class Meta:
        model = Subject
        depth = 0
        fields = '__all__'


class SubjectToEntityRelationSerializer(ModelSerializer):

    class Meta:
        model = SubjectToEntityRelation
        depth = 0
        fields = '__all__'
