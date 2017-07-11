from meeting_manager.models import Meeting, Entity, Person
from rest_framework import serializers

class PersonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Person
		fields = ('id', 'first_name', 'last_name', 'user')

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ('id', 'meeting_category', 'entity', 'requested_meetdate', 'participants')

class EntitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Entity
		fields = ('id', 'name', 'category')

