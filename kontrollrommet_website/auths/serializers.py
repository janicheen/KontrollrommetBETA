#Core models
from core_database.models import Person

# Django dependencies
from rest_framework import serializers

# Django User Model
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
	# Relevant data to grab from attatched Person instance
	personid = serializers.ReadOnlyField(source='person.id')
	first_name = serializers.ReadOnlyField(source='person.first_name')
	last_name = serializers.ReadOnlyField(source='person.last_name')
	class Meta:
		model = User
		fields = ('id', 'username', 'email', 'personid', 'first_name', 'last_name')


