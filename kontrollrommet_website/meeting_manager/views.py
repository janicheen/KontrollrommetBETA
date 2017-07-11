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
from meeting_manager.models import Meeting
from meeting_manager.serializers import MeetingSerializer

class MeetingViewSet(viewsets.ModelViewSet):
	queryset = Meeting.objects.all()
	serializer_class = MeetingSerializer
	

###TEST VIEW
def index(request):
    return HttpResponse("Hello, world. You're at the meeting manager")