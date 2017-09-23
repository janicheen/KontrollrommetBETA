# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework import serializers

#Models
from meeting_manager.models import MeetingCategory
from meeting_manager.models import Meeting
from meeting_manager.models import MeetingParticipant, MeetingSubject


# Meeting Categories
class MeetingCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = MeetingCategory
		fields = (
			'id', 
			'name'
			)
# Serializes meeting meetingparticipants in meeting_manager
class MeetingParticipantSerializer(serializers.ModelSerializer):
	meeting_id = serializers.ReadOnlyField(source='meeting.id')
	person_id = serializers.ReadOnlyField(source='person.id')
	person_first_name = serializers.ReadOnlyField(source='person.first_name')
	person_last_name = serializers.ReadOnlyField(source='person.last_name')
	class Meta:
		model = MeetingParticipant
		fields = (
			'id',
			# Meeting data to include
			'meeting_id',
			# Person data to include
			'person_id',
			'person_first_name',
			'person_last_name',
			# MeetingParticipant data
			'is_invited',
			'is_attending',
			'is_leading',
			'is_reporting',
			'sent_meetingrequest',
			'accepted_invite'	
			)
# Serializes meeting meetingparticipants in meeting_manager
class MeetingParticipantSerializerPOST(serializers.ModelSerializer):
	class Meta:
		model = MeetingParticipant
		fields = (
			# Meeting data to include
			'meeting',
			# Person data to include
			'person',
			# MeetingParticipant data
			'is_invited',
			'is_attending',
			'is_leading',
			'is_reporting',
			'sent_meetingrequest',
			'accepted_invite'	
			)

# Serializes meeting subjects in meeting_manager
class MeetingSubjectSerializer(serializers.ModelSerializer):
	meeting_id = serializers.ReadOnlyField(source='meeting.id')
	subject_id = serializers.ReadOnlyField(source='subject.id')
	subject_headline = serializers.ReadOnlyField(source='subject.headline')
	class Meta:
		model = MeetingSubject
		fields = (
			'id',
			# Meeting data to include
			'meeting_id',
			# Subject data to include
			'subject_id',
			'subject_headline',
			# Meeting Subject data
			'request_headline',
			'request_description',
			'listposition_on_request',
			'listposition_on_report'
		)

class MeetingSubjectSerializerPOST(serializers.ModelSerializer):
	class Meta:
		model = MeetingSubject
		fields = (
			# Meeting data to include
			'meeting',
			# Subject data to include
			'subject',
			# Meeting Subject data
			'request_headline',
			'request_description',
			'listposition_on_request',
			'listposition_on_report'
		)

# Serializes Meetings
class MeetingSerializer(serializers.ModelSerializer):
	meeting_category = MeetingCategorySerializer()
	executive_entity = EntitySerializer()
	meetingparticipants = MeetingParticipantSerializer(source='participant_set', many=True, read_only=True)
	meetingsubjects = MeetingSubjectSerializer(source='meetingsubject_set', many=True, read_only=True)

	class Meta:
		model = Meeting
		fields = (
			'id', 
			# Relational data
			'meeting_category',
			'entity',
			'meetingparticipants',
			'meetingsubjects',
			# Date data
			'requested_meetdate',
			'meetingrequest_sent',
			'meeting_started',
			'meeting_completed',
			'report_started',
			'report_completed',
			# Boolean
			'is_current_meeting',
		)

# Serializes Meetings
class MeetingSerializerPOST(serializers.ModelSerializer):
	class Meta:
		model = Meeting
		fields = (
			'id', 
			# Relational data
			'meeting_category',
			'entity',
			# Date data
			'requested_meetdate',
			'meetingrequest_sent',
			'meeting_started',
			'meeting_completed',
			'report_started',
			'report_completed',
			# Boolean
			'is_current_meeting',
		)