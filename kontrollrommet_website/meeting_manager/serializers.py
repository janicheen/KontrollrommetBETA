#Core models
from core_database.models import Entity, Person, PersonToEntityRelation

#Models
from meeting_manager.models import Meeting, Participant, MeetingSubject, MeetingCategory

# Rest Framework dependencies
from rest_framework import serializers

class ParticipantSerializer(serializers.ModelSerializer):
	id = serializers.ReadOnlyField(source='person.id')
	name = serializers.ReadOnlyField(source='person.full_name')
	class Meta:
		model = Participant
		fields = ('id', 'name', 'sent_meetingrequest', 'is_invited', 'accepted_invite', 'is_attending', 'is_leading', 'is_reporting')

class MeetingsubjectSerializer(serializers.ModelSerializer):
	id = serializers.ReadOnlyField(source='subject.id')
	headline = serializers.ReadOnlyField(source='subject.headline')
	class Meta:
		model = MeetingSubject
		fields = ('id', 'headline', 'listposition_on_request', 'listposition_on_report')

class MeetingSerializer(serializers.ModelSerializer):
	participants = ParticipantSerializer(source='participant_set', many=True)
	meeting_subjects = MeetingsubjectSerializer(source='meetingsubject_set', many=True)
	meeting_category = serializers.StringRelatedField()
	entity = serializers.StringRelatedField()
	class Meta:
		model = Meeting
		fields = ('id', 'meeting_category', 'entity', 'requested_meetdate', 'participants', 'meeting_subjects')

class MeetingCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = MeetingCategory
		fields = ('id', 'name')