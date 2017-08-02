# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework_jwt.views import ObtainJSONWebToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
# Create your views here.

#Special overriding of JWT post class, to include sending user info in addition to token
# NOT IN USE currently
class MySpecialJWT(ObtainJSONWebToken):
    def post(self, request, *args, **kwargs):
        response = super(MySpecialJWT, self).post(request, *args, **kwargs)
        token = response.data['token']
        user = "something"
        return Response({'token': token, 'user': user})

###TEST VIEW
def index(request):
    return HttpResponse("Hello, world. You're at the dashboard, run by the presentation mainframe.")