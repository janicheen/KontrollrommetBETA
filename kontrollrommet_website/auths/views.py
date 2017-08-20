# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.http import HttpResponse
from django.shortcuts import render


# REST Framework dependencies
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from rest_framework import viewsets
from rest_framework.response import Response

# Django User Model
from django.contrib.auth.models import User

# Models and serializers
from auths.serializers import UserSerializer

#Viewset for all users
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    
    serializer_class = UserSerializer
    queryset = User.objects.all()

#View to get logged in user
class CurrentUser(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        currentuser = User.objects.get(id=request.user.id)
        serializer = UserSerializer(currentuser)
        return Response(serializer.data)   

