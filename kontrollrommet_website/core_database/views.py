# Rest Framework dependencies
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
# Serializers
from core_database.serializers import PersonCategorySerializer, EntityCategorySerializer, PropertyCategorySerializer 
from core_database.serializers import PersonToEntityRelationCategorySerializer, EntityToPropertyRelationCategorySerializer, PropertyToPersonRelationCategorySerializer
from core_database.serializers import PersonSerializer, EntitySerializer, PropertySerializer
from core_database.serializers import PersonToEntityRelationSerializer, EntityToPropertyRelationSerializer, PropertyToPersonRelationSerializer
# Models
from core_database.models import PersonCategory, EntityCategory, PropertyCategory 
from core_database.models import PersonToEntityRelationCategory, EntityToPropertyRelationCategory, PropertyToPersonRelationCategory
from core_database.models import Person, Entity, Property
from core_database.models import PersonToEntityRelation, EntityToPropertyRelation, PropertyToPersonRelation

### Category Viewsets ###
class PersonCategoryViewSet(ModelViewSet):
    queryset = PersonCategory.objects.all()
    serializer_class = PersonCategorySerializer

class EntityCategoryViewSet(ModelViewSet):
    queryset = EntityCategory.objects.all()
    serializer_class = EntityCategorySerializer

class PropertyCategoryViewSet(ModelViewSet):
    queryset = PropertyCategory.objects.all()
    serializer_class = PropertyCategorySerializer

class PersonToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = PersonToEntityRelationCategory.objects.all()
    serializer_class = PersonToEntityRelationCategorySerializer

class EntityToPropertyRelationCategoryViewSet(ModelViewSet):
    queryset = EntityToPropertyRelationCategory.objects.all()
    serializer_class = EntityToPropertyRelationCategorySerializer

class PropertyToPersonRelationCategoryViewSet(ModelViewSet):
    queryset = PropertyToPersonRelationCategory.objects.all()
    serializer_class = PropertyToPersonRelationCategorySerializer


### Core Model Viewsets ###
class PersonViewSet(ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class EntityViewSet(ModelViewSet):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer

class PropertyViewSet(ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

### Relational viewsets ###
class PersonToEntityRelationViewSet(ModelViewSet):
    queryset = PersonToEntityRelation.objects.all()
    serializer_class = PersonToEntityRelationSerializer

class EntityToPropertyRelationViewSet(ModelViewSet):
    queryset = EntityToPropertyRelation.objects.all()
    serializer_class = EntityToPropertyRelationSerializer

class PropertyToPersonRelationViewSet(ModelViewSet):
    queryset = PropertyToPersonRelation.objects.all()
    serializer_class = PropertyToPersonRelationSerializer

