# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework import serializers
# Django User Model
from django.contrib.auth.models import User
# Models
from resources.models import PersonToEntityRelation, EntityToPropertyRelation, PropertyToPersonRelation
from meeting_manager.models import Meeting, MeetingSubject, MeetingParticipant
# Serializers
from resources.serializers import PersonSerializer, EntitySerializer, PropertySerializer


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

