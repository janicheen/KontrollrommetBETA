from meeting_manager.models import Meeting, Entity, Person, Participant, Meetingsubject
from rest_framework import serializers

class ParticipantSerializer(serializers.ModelSerializer):
	id = serializers.ReadOnlyField(source='person.id')
	name = serializers.ReadOnlyField(source='person.full_name')
	class Meta:
		model = Participant
		fields = ('id', 'name', 'sent_meetingrequest', 'is_invited', 'accepted_invite', 'is_attending', 'is_leading', 'is_reporting')

class MeetingsubjectSerializer(serializers.ModelSerializer):
		class Meta:
			model = Meetingsubject
			fields = ('original_listposition', 'original_headline')

class PersonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Person
		fields = ('id', 'first_name', 'last_name', 'user')

class MeetingSerializer(serializers.ModelSerializer):
	participants = ParticipantSerializer(source='participant_set', many=True)
	meeting_subjects = MeetingsubjectSerializer(many=True)
	class Meta:
		model = Meeting
		fields = ('id', 'meeting_category', 'entity', 'requested_meetdate', 'participants', 'meeting_subjects')

class EntitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Entity
		fields = ('id', 'name', 'category')

