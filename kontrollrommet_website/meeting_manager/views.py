# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.http import HttpResponse

# REST Framework dependencies
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response

# Django User Model
from django.contrib.auth.models import User

# Models and serializers
from meeting_manager.models import Meeting, Entity, Person
from meeting_manager.serializers import MeetingSerializer, EntitySerializer, PersonSerializer


class PersonViewSet(viewsets.ModelViewSet):
	serializer_class = PersonSerializer
	queryset = Person.objects.all()

# Default viewset of all meetings, listing, editing, creating and detail view
class MeetingViewSet(viewsets.ModelViewSet):
	serializer_class = MeetingSerializer
	# makes a queryset of all meetings where current user is participant 
	def get_queryset(self):        
		user = self.request.user
		return Meeting.objects.filter(participants__user__id = user.id)

# Default viewset of all entities, listing, editing, creating and detail view
class EntityViewSet(viewsets.ModelViewSet):
	serializer_class = EntitySerializer
	# makes a queryset of all meetings where current user is participant 
	def get_queryset(self):        
		user = self.request.user
		return Entity.objects.filter(persontoentityrelation__person__user__id = user.id)


###TEST VIEW
def index(request):
    return HttpResponse("Hello, world. You're at the meeting manager")