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
# Action Data Model
from process_control.models import Subject, SubjectToEntityRelation
# Application Data Models
from meeting_manager.models import Meeting, MeetingCategory, Participant, MeetingSubject

### Serializers
# User Serializers
from .serializers import UserSerializer
# Core Data Serializers
from .serializers import EntitySerializer, PersonSerializer
from .serializers import EntitiesByPersonSerializer, PersonsByEntitySerializer
# Action Data Serializers
from .serializers import SubjectSerializer, SubjectsByEntitySerializer
# Application Data Serializers
from .serializers import MeetingSerializer, MeetingSerializerPOST, MeetingCategorySerializer, ParticipantSerializer, ParticipantSerializerPOST, MeetingSubjectSerializer, MeetingSubjectSerializerPOST


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
class MeetingCategoriesView(ListAPIView):
	serializer_class = MeetingCategorySerializer
	queryset = MeetingCategory.objects.all()

### Views based on current user

# List entities related to current user
class EntitiesByUserView(ListAPIView):
	serializer_class = EntitySerializer
	# makes a queryset of all entities where current user has some function 
	def get_queryset(self):        
		user = self.request.user
		return Entity.objects.filter(persontoentityrelation__person__user__id = user.id)

# Viewset for all Meetings, where current user is participant
class MeetingViewSet(viewsets.ModelViewSet):
	serializer_class = MeetingSerializer
	# makes a queryset of all meetings where current user is participant 
	def get_queryset(self):        
		user = self.request.user
		return Meeting.objects.filter(participants__user__id = user.id)

	# sets different serializers for read and write
	def get_serializer_class(self):
		if self.request.method == 'POST':
			return MeetingSerializerPOST
		return MeetingSerializer


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

#View to get logged in user
class CurrentUser(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        currentuser = User.objects.get(id=request.user.id)
        serializer = UserSerializer(currentuser)
        return Response(serializer.data)   

