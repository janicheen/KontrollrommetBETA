from meeting_manager.models import Meeting, Entity, Person, Participant
from rest_framework import serializers

class ParticipantSerializer(serializers.ModelSerializer):
	id = serializers.ReadOnlyField(source='person.id')
	name = serializers.ReadOnlyField(source='person.first_name')
	class Meta:
		model = Participant
		fields = ('id', 'name', 'is_invited')

class PersonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Person
		fields = ('id', 'first_name', 'last_name', 'user')

class MeetingSerializer(serializers.ModelSerializer):
	participants = ParticipantSerializer(source='participant_set', many=True)
	#    participants = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
	#    print(participants)
	class Meta:
		model = Meeting
		fields = ('id', 'meeting_category', 'entity', 'requested_meetdate', 'participants')

class EntitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Entity
		fields = ('id', 'name', 'category')

