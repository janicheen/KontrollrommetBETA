# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.http import HttpResponse
from django.shortcuts import render


# REST Framework dependencies
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

# Django User Model
from django.contrib.auth.models import User

# Models and serializers
from core_database.models import Person

from serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class CurrentUser(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        currentuser = User.objects.get(id=request.user.id)
        serializer = UserSerializer(currentuser)
        return Response(serializer.data)   

# NOT FINISHED
#class GetUserDataViewSet(viewsets.ModelViewSet):
 #   serializer_class = PersonSerializer
  #  queryset = Person.objects.all()
