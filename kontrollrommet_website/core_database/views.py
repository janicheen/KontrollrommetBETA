# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# REST Framework dependencies
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from rest_framework.response import Response

# Django User Model
from django.contrib.auth.models import User
# Models
from core_database.models import Entity, Person, PersonToEntityRelation
from meeting_manager.models import SubjectToEntityRelation
# Serializers
from core_database.serializers import EntitySerializer, PersonSerializer, EntitiesByPersonSerializer, PersonsByEntitySerializer

### General viewsets
# Default viewset for all persons
class PersonViewSet(viewsets.ModelViewSet):
	serializer_class = PersonSerializer
	queryset = Person.objects.all()

# Default viewset for all entities
class EntityViewSet(viewsets.ModelViewSet):
	serializer_class = EntitySerializer
	queryset = Entity.objects.all()

### Views based on user
# Default view for getting the entities related to current user
class EntitiesByUserView(ListAPIView):
	serializer_class = EntitiesByPersonSerializer
	# makes a queryset of all entities where current user has some function 
	def get_queryset(self):        
		user = self.request.user
		return PersonToEntityRelation.objects.filter(person__user__id = user.id)

### Views requiring query parameters in URL
class PersonsByEntityViewSet(viewsets.ReadOnlyModelViewSet):
	serializer_class = PersonsByEntitySerializer
	# makes a queryset with all persons matching the requested entity 
	def get_queryset(self):
		id = self.request.query_params.get('id', None)
		queryset = PersonToEntityRelation.objects.filter(entity__id = id)
		return queryset

