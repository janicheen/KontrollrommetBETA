# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework import serializers
# Django User Model
from django.contrib.auth.models import User
# Serializers
from resources.serializers import PersonSerializer, EntitySerializer, PropertySerializer
from resources.serializers import PersonToEntityRelationSerializer, PropertyToPersonRelationSerializer

# Serializer to implment field dynamics
class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop('fields', None)
        # Instantiate the superclass normally
        super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)
        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields.keys())
            for field_name in existing - allowed:
                self.fields.pop(field_name)


# Serializes user data with added person data 
class UserSerializer(DynamicFieldsModelSerializer):
    # Hook relevant Person instance to the User instance
    person = PersonSerializer()
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'username',
            'password',
            'email',
            'person',
        )
