# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework import serializers
# Django User Model
from django.contrib.auth.models import User
# Models
from resources.models import PersonToEntityRelation, EntityToPropertyRelation, PropertyToPersonRelation
# Serializers
from resources.serializers import PersonSerializer, EntitySerializer, PropertySerializer


### Serializers adding relational data
# Serializes entity data with added person relation data
class EntitiesByPersonSerializer(serializers.ModelSerializer):
	person = PersonSerializer()
	entity = EntitySerializer()
	person_to_entity_relation_name = serializers.StringRelatedField(source='function')
	class Meta:
		model = PersonToEntityRelation
		fields = (
			'id',
			# Person related data
			'person',
			# Entity related data
			'entity', 
			# Relational data 
			'person_to_entity_relation_name'
			)

# Serializes person data with added entity relation data 
class PersonsByEntitySerializer(serializers.ModelSerializer):
	person_id = serializers.ReadOnlyField(source='person.id')
	person_firstname = serializers.ReadOnlyField(source='person.first_name')
	person_lastname = serializers.ReadOnlyField(source='person.last_name')
	function = serializers.StringRelatedField()
	class Meta:
		model = PersonToEntityRelation
		fields = (
			'person_id',
			'person_firstname', 
			'person_lastname', 
			'function'
			)


### Application Serializers

