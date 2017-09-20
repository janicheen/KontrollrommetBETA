from rest_framework.viewsets import ModelViewSet
from core_database.serializers import EntityCategorySerializer, PersonToEntityRelationCategorySerializer, EntityToPropertyRelationCategorySerializer, PersonSerializer, EntitySerializer, PropertySerializer, PersonToEntityRelationSerializer, EntityToPropertyRelationSerializer
from core_database.models import EntityCategory, PersonToEntityRelationCategory, EntityToPropertyRelationCategory, Person, Entity, Property, PersonToEntityRelation, EntityToPropertyRelation


class EntityCategoryViewSet(ModelViewSet):
    queryset = EntityCategory.objects.all()
    serializer_class = EntityCategorySerializer


class PersonToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = PersonToEntityRelationCategory.objects.all()
    serializer_class = PersonToEntityRelationCategorySerializer


class EntityToPropertyRelationCategoryViewSet(ModelViewSet):
    queryset = EntityToPropertyRelationCategory.objects.all()
    serializer_class = EntityToPropertyRelationCategorySerializer


class PersonViewSet(ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class EntityViewSet(ModelViewSet):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer


class PropertyViewSet(ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer


class PersonToEntityRelationViewSet(ModelViewSet):
    queryset = PersonToEntityRelation.objects.all()
    serializer_class = PersonToEntityRelationSerializer


class EntityToPropertyRelationViewSet(ModelViewSet):
    queryset = EntityToPropertyRelation.objects.all()
    serializer_class = EntityToPropertyRelationSerializer
