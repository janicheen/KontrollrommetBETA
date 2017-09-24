# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# REST Framework dependencies
from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

### Models
# Django User Model
from django.contrib.auth.models import User
# Core Databse 
from resources.models import Person, Entity, Property
from resources.models import PersonToEntityRelation
# Meeting Manager Application
from meeting_manager.models import MeetingCategory
from meeting_manager.models import Meeting
from meeting_manager.models import MeetingParticipant, MeetingSubject

### Serializers
# General Serializers
from resources.serializers import PersonSerializer, EntitySerializer, PropertySerializer
from meeting_manager.serializers import MeetingSerializer
# Serializers specially designed for client view
from client_views.serializers import UserSerializer


### Views based on current user

# Get Current User
class CurrentUser(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, format=None):
        currentuser = User.objects.get(id=request.user.id)
        serializer = UserSerializer(currentuser)
        return Response(serializer.data) 

# Get list of Entities where Current User i related
class EntitiesByUserView(ListAPIView):
    serializer_class = EntitySerializer
    # queryset: all entities where current user has some function 
    def get_queryset(self):        
        user = self.request.user
        return Entity.objects.filter(persontoentityrelation__person__user__id = user.id)

# Get Meetings where Current User is MeetingParticipant
class MeetingsByUserView(ListAPIView):
    serializer_class = MeetingSerializer
    # makes a queryset of all meetings where current user is participant 
    def get_queryset(self):        
        user = self.request.user
        return Meeting.objects.filter(meetingparticipants__user__id = user.id)

