# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response

from meeting_manager.models import Meeting, Participant
from meeting_manager.serializers import MeetingListSerializer

class MeetingList(viewsets.ModelViewSet):
	serializer_class = MeetingListSerializer
	queryset = Meeting.objects.all()

