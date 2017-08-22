# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.http import HttpResponse
from django.shortcuts import render

# REST Framework dependencies
from rest_framework import viewsets
from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

### Models
# Django User Model
from django.contrib.auth.models import User

# Core Data Models
from core_database.models import Entity, Person, PersonToEntityRelation
# Action Data Model
from process_control.models import SubjectToEntityRelation
# Application Data Models
from meeting_manager.models import Meeting, MeetingCategory

### Serializers
# User Serializers
from .serializers import UserSerializer
# Core Data Serializers
from .serializers import EntitySerializer, PersonSerializer
from .serializers import EntitiesByPersonSerializer, PersonsByEntitySerializer
# Action Data Serializers
from .serializers import SubjectsByEntitySerializer
# Application Data Serializers
from .serializers import MeetingSerializer, MeetingCategorySerializer


### Pure Viewsets ###
# -Viewsets that directly correspond to models

# User Viewset
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)  
    serializer_class = UserSerializer
    queryset = User.objects.all()

# Person Viewset
class PersonViewSet(viewsets.ModelViewSet):
	serializer_class = PersonSerializer
	queryset = Person.objects.all()

# Entity Viewset
class EntityViewSet(viewsets.ModelViewSet):
	serializer_class = EntitySerializer
	queryset = Entity.objects.all()


### Pure ListViews

# -Listviews that directly correspond to models
class MeetingCategoriesView(ListAPIView):
	serializer_class = MeetingCategorySerializer
	queryset = MeetingCategory.objects.all()

### Views based on current user

# List entities related to current user
class EntitiesByUserView(ListAPIView):
	serializer_class = EntitiesByPersonSerializer
	# makes a queryset of all entities where current user has some function 
	def get_queryset(self):        
		user = self.request.user
		return PersonToEntityRelation.objects.filter(person__user__id = user.id)

# Viewset for all Meetings, where current user is participant
class MeetingViewSet(viewsets.ModelViewSet):
	serializer_class = MeetingSerializer
	# makes a queryset of all meetings where current user is participant 
	def get_queryset(self):        
		user = self.request.user
		return Meeting.objects.filter(participants__user__id = user.id)


### Query parameter based views

class PersonsByEntityViewSet(viewsets.ReadOnlyModelViewSet):
	serializer_class = PersonsByEntitySerializer
	# makes a queryset with all persons matching the requested entity 
	def get_queryset(self):
		id = self.request.query_params.get('id', None)
		queryset = PersonToEntityRelation.objects.filter(entity__id = id)
		return queryset

class SubjectsByEntityViewSet(viewsets.ReadOnlyModelViewSet):
    	serializer_class = SubjectsByEntitySerializer
	# makes a queryset with all subjects matching the requested entity 
	def get_queryset(self):
		id = self.request.query_params.get('id', None)
		queryset = SubjectToEntityRelation.objects.filter(entity__id = id)
		return queryset


### Views to get specific instances ###

#View to get logged in user
class CurrentUser(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        currentuser = User.objects.get(id=request.user.id)
        serializer = UserSerializer(currentuser)
        return Response(serializer.data)   

