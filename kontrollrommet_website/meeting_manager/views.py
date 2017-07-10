# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from meeting_manager.models import Meeting, Participant
from meeting_manager.serializers import MeetingListSerializer

from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework import viewsets

class MeetingList(viewsets.ModelViewSet):
	serializer_class = MeetingListSerializer

	def get_queryset(self):
		"""
		This view should return a list of all the purchases
		for the currently authenticated user.
		"""
		user = self.request.user
		return Meeting.objects.filter(participants__person__user=user).filter(participants__is_invited=True).order_by('requested_meetdate')
