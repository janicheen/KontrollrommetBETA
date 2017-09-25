# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework import serializers
# Django User Model
from django.contrib.auth.models import User
# Serializers
from resources.serializers import PersonSerializer, EntitySerializer, PropertySerializer
from resources.serializers import PersonToEntityRelationSerializer, PropertyToPersonRelationSerializer

### User data serializer ###

# Serializes user data with added person data 
class UserSerializer(serializers.ModelSerializer):
    # Hook relevant Person instance to the User instance
    person = PersonSerializer()
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'person',
            )
