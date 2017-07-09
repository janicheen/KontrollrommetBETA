# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from .permissions import IsStaffOrTargetUser
from .serializers import UserSerializer

from . import authentication, serializers  # see previous post[1] for user serializer.

 
# Create your views here.
 
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    model = User
    queryset = User.objects.all()
 
    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return (AllowAny() if self.request.method == 'POST'
                else IsStaffOrTargetUser()),


class AuthView(APIView):
    authentication_classes = (authentication.QuietBasicAuthentication,)
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()
    
    def post(self, request, *args, **kwargs):
        return Response(self.serializer_class(request.user).data)

