# Django dependencies
from rest_framework import serializers

# Models

# Serializers
from core_database.serializers import PersonSerializer
# Django User Model
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
	# Hook relevant Person instance to the User instance
	person = PersonSerializer()
	class Meta:
		model = User
		fields = ('id', 'username', 'email', 'person')
