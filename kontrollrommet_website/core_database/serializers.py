# Django Dependencies
from rest_framework.serializers import ModelSerializer
# Category models
from core_database.models import EntityCategory, PersonToEntityRelationCategory, EntityToPropertyRelationCategory, 
# Core Models
from core_database.models import Person, Entity, Property
# Relational Models
from core_database.models import PersonToEntityRelation, EntityToPropertyRelation


class EntityCategorySerializer(ModelSerializer):

    class Meta:
        model = EntityCategory
        depth = 0
        fields = '__all__'


class PersonToEntityRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PersonToEntityRelationCategory
        depth = 0
        fields = '__all__'


class EntityToPropertyRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = EntityToPropertyRelationCategory
        depth = 0
        fields = '__all__'


class PersonSerializer(ModelSerializer):

    class Meta:
        model = Person
        depth = 0
        fields = '__all__'


class EntitySerializer(ModelSerializer):

    class Meta:
        model = Entity
        depth = 0
        fields = '__all__'


class PropertySerializer(ModelSerializer):

    class Meta:
        model = Property
        depth = 0
        fields = '__all__'


class PersonToEntityRelationSerializer(ModelSerializer):

    class Meta:
        model = PersonToEntityRelation
        depth = 0
        fields = '__all__'


class EntityToPropertyRelationSerializer(ModelSerializer):

    class Meta:
        model = EntityToPropertyRelation
        depth = 0
        fields = '__all__'
