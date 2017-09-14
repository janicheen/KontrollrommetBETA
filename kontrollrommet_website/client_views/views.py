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
from rest_framework import status

### Models
# Django User Model
from django.contrib.auth.models import User

# Core Data Models
from core_database.models import Entity, Person, PersonToEntityRelation 
# Category Models
from core_database.models import EntityCategory, PersonToEntityRelationCategory
from meeting_manager.models import MeetingCategory
# Action Data Model
from process_control.models import Subject, SubjectToEntityRelation
# Application Data Models
from meeting_manager.models import Meeting, Participant, MeetingSubject

### Serializers
# User Serializers
from .serializers import UserSerializer
# Category Serializers
from .serializers import EntityCategorySerializer, MeetingCategorySerializer, PersonToEntityRelationCategorySerializer 
# Core Data Serializers
from .serializers import EntitySerializer, PersonSerializer
# Core Data Relational Serializers 
from .serializers import EntitiesByPersonSerializer, PersonsByEntitySerializer
# Action Data Serializers
from .serializers import SubjectSerializer
# Action Data Relational Serializers
from .serializers import SubjectsByEntitySerializer
# Application Data Serializers
from .serializers import MeetingSerializer, MeetingSerializerPOST, ParticipantSerializer, ParticipantSerializerPOST, MeetingSubjectSerializer, MeetingSubjectSerializerPOST


### Pure Viewsets ###

# Entity Category Viewset
class EntityCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = EntityCategorySerializer
    queryset = EntityCategory.objects.all()

# Meeting Category Viewset
class MeetingCategoriesViewSet(viewsets.ModelViewSet):
	serializer_class = MeetingCategorySerializer
	queryset = MeetingCategory.objects.all()

# Person to Entity Relation Category Viewset
class PersonToEntityRelationCategoryViewSet(viewsets.ModelViewSet):
	serializer_class = PersonToEntityRelationCategorySerializer
	queryset = PersonToEntityRelationCategory.objects.all()


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

# Meetings Viewset
class MeetingViewSet(viewsets.ModelViewSet):
	serializer_class = MeetingSerializer
	queryset = Meeting.objects.all()

	# sets different serializers for read and write
	def get_serializer_class(self):
		if self.request.method == 'POST':
			return MeetingSerializerPOST
		return MeetingSerializer


# Participant Viewset
class ParticipantViewSet(viewsets.ModelViewSet):
	serializer_class = ParticipantSerializer
	queryset = Participant.objects.all()

	# Redefines create so it can receive a list of object entries
	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

	# sets different serializers for read and write
	def get_serializer_class(self):
		if self.request.method == 'POST':
			return ParticipantSerializerPOST
		return ParticipantSerializer


# Meetingsubject Viewset
class MeetingSubjectViewSet(viewsets.ModelViewSet):
	serializer_class = MeetingSubjectSerializer
	queryset = MeetingSubject.objects.all()
	
	# Redefines create so it can receive a list of object entries
	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
	
	# sets different serializers for read and write
	def get_serializer_class(self):
		if self.request.method == 'POST':
			return MeetingSubjectSerializerPOST
		return MeetingSubjectSerializer


### Pure ListViews
# -Listviews that directly correspond to models


### Views based on current user

# Current User
class CurrentUser(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, format=None):
        currentuser = User.objects.get(id=request.user.id)
        serializer = UserSerializer(currentuser)
        return Response(serializer.data)   

# Entities by Current User
class EntitiesByUserView(ListAPIView):
	serializer_class = EntitySerializer
	# makes a queryset of all entities where current user has some function 
	def get_queryset(self):        
		user = self.request.user
		return Entity.objects.filter(persontoentityrelation__person__user__id = user.id)

# Meetings bu Current User as Participant
class MeetingsByUserView(ListAPIView):
	serializer_class = MeetingSerializer
	# makes a queryset of all meetings where current user is participant 
	def get_queryset(self):        
		user = self.request.user
		return Meeting.objects.filter(participants__user__id = user.id)

### Query parameter based views

class PersonsByEntityViewSet(viewsets.ReadOnlyModelViewSet):
	serializer_class = PersonSerializer
	# makes a queryset with all persons matching the requested entity 
	def get_queryset(self):
		id = self.request.query_params.get('id', None)
		queryset = Person.objects.filter(persontoentityrelation__entity__id = id)
		return queryset

class SubjectsByEntityViewSet(viewsets.ReadOnlyModelViewSet):
    	serializer_class = SubjectSerializer
	# makes a queryset with all subjects matching the requested entity 
	def get_queryset(self):
		id = self.request.query_params.get('id', None)
		queryset = Subject.objects.filter(subjecttoentityrelation__entity__id = id)
		return queryset


### Views to get specific instances ###

