# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies

# REST Framework dependencies
from rest_framework import generics
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from rest_framework.response import Response

# Models and serializers
from process_control.models import SubjectToEntityRelation
from process_control.serializers import SubjectsByEntitySerializer

class SubjectsByEntityViewSet(viewsets.ReadOnlyModelViewSet):
    	serializer_class = SubjectsByEntitySerializer
	# makes a queryset with all subjects matching the requested entity 
	def get_queryset(self):
		id = self.request.query_params.get('id', None)
		queryset = SubjectToEntityRelation.objects.filter(entity__id = id)
		return queryset
