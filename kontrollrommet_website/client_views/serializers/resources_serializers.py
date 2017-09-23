# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework.serializers import ModelSerializer
#Models
from resources.models import PersonCategory, EntityCategory, PropertyCategory 
from resources.models import PersonToEntityRelationCategory, EntityToPropertyRelationCategory, PropertyToPersonRelationCategory
from resources.models import Person, Entity, Property
from resources.models import PersonToEntityRelation, EntityToPropertyRelation, PropertyToPersonRelation

#  Person
class PersonSerializer(ModelSerializer):

    class Meta:
        model = Person
        depth = 0
        fields = '__all__'

# Entity
class EntitySerializer(ModelSerializer):

    class Meta:
        model = Entity
        depth = 0
        fields = '__all__'

# Property
class PropertySerializer(ModelSerializer):

    class Meta:
        model = Property
        depth = 0
        fields = '__all__'


