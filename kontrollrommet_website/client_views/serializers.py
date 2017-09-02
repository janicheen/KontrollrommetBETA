# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# REST Framework dependencies
from rest_framework import serializers

# Django User Model
from django.contrib.auth.models import User
# Core Data Models
from core_database.models import Entity, Person, PersonToEntityRelation
# Action Data Model
from process_control.models import Subject, SubjectToEntityRelation
#Application Data Models
from meeting_manager.models import Meeting, Participant, MeetingSubject, MeetingCategory

### Category List Serializers
# Serializes list of Meeting Categories
class MeetingCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = MeetingCategory
		fields = (
			'id', 
			'name'
			)


### Pure data model serializers
# Serializes pure person data
class PersonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Person
		fields = (
			'id', 
			'first_name', 
			'last_name'
			)

# Serializes pure entity data
class EntitySerializer(serializers.ModelSerializer):
	category_name = serializers.StringRelatedField(source='category')
	class Meta:
		model = Entity
		fields = (
			'id', 
			'name', 
			'category_name'
			)
# Serializes pure Subject data
class SubjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = Subject
		fields = (
			'id',
			'headline',
			'description'
		)

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
			'person'
			)

### Serializers adding relational data
# Serializes entity data with added person relation data
class EntitiesByPersonSerializer(serializers.ModelSerializer):
	person = PersonSerializer()
	entity = EntitySerializer()
	person_to_entity_relation_name = serializers.StringRelatedField(source='function')
	class Meta:
		model = PersonToEntityRelation
		fields = (
			'id',
			# Person related data
			'person',
			# Entity related data
			'entity', 
			# Relational data 
			'person_to_entity_relation_name'
			)

# Serializes person data with added entity relation data 
class PersonsByEntitySerializer(serializers.ModelSerializer):
	person_id = serializers.ReadOnlyField(source='person.id')
	person_firstname = serializers.ReadOnlyField(source='person.first_name')
	person_lastname = serializers.ReadOnlyField(source='person.last_name')
	function = serializers.StringRelatedField()
	class Meta:
		model = PersonToEntityRelation
		fields = (
			'person_id',
			'person_firstname', 
			'person_lastname', 
			'function'
			)

# Serializes Subjects with added entity relation data
class SubjectsByEntitySerializer(serializers.ModelSerializer):
	subject_id = serializers.ReadOnlyField(source='subject.id')
	headline = serializers.ReadOnlyField(source='subject.headline')
	description = serializers.ReadOnlyField(source='subject.description')
	class Meta:
		model = SubjectToEntityRelation
		fields = (
			'subject_id',
			'headline',
			'description',
			'relation'
			)


### Application Serializers

# Serializes meeting participants in meeting_manager
class ParticipantSerializer(serializers.ModelSerializer):
	meeting_id = serializers.ReadOnlyField(source='meeting.id')
	person_id = serializers.ReadOnlyField(source='person.id')
	person_first_name = serializers.ReadOnlyField(source='person.first_name')
	person_last_name = serializers.ReadOnlyField(source='person.last_name')
	class Meta:
		model = Participant
		fields = (
			'id',
			# Meeting data to include
			'meeting_id',
			# Person data to include
			'person_id',
			'person_first_name',
			'person_last_name',
			# Participant data
			'is_invited',
			'is_attending',
			'is_leading',
			'is_reporting',
			'sent_meetingrequest',
			'accepted_invite'	
			)
# Serializes meeting participants in meeting_manager
class ParticipantSerializerPOST(serializers.ModelSerializer):
	class Meta:
		model = Participant
		fields = (
			# Person data to include
			'person',
			# Participant data
			'is_invited',
			'is_attending',
			'is_leading',
			'is_reporting',
			'sent_meetingrequest',
			'accepted_invite'	
			)

# Serializes meeting subjects in meeting_manager
class MeetingsubjectSerializer(serializers.ModelSerializer):
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
			'edited_headline',
			'edited_description',
			'listposition_on_request',
			'listposition_on_report'
		)

class MeetingsubjectSerializerPOST(serializers.ModelSerializer):
	class Meta:
		model = MeetingSubject
		fields = (
			# Subject data to include
			'subject',
			# Meeting Subject data
			'edited_headline',
			'edited_description',
			'listposition_on_request',
			'listposition_on_report'
		)

# Serializes Meetings
class MeetingSerializer(serializers.ModelSerializer):
	meeting_category = MeetingCategorySerializer()
	entity = EntitySerializer()
	participants = ParticipantSerializer(source='participant_set', many=True)
	meeting_subjects = MeetingsubjectSerializer(source='meetingsubject_set', many=True)

	class Meta:
		model = Meeting
		fields = (
			'id', 
			# Relational data
			'meeting_category',
			'entity',
			'participants',
			'meeting_subjects',
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
	participants = ParticipantSerializerPOST(source='participant_set', many=True)
	meeting_subjects = MeetingsubjectSerializerPOST(source='meetingsubject_set', many=True)

### Under construction	
	def create(self, validated_data):
		# Pop out all relative data from Recieved instance
		meeting_category_data = validated_data.pop('meeting_category')
		entity_data = validated_data.pop('entity')
		participants_data = validated_data.pop('participants')
		meeting_subjects_data = validated_data.pop('meeting_subjects')
		# Create Meeting instance
		meeting = Meeting.objects.create(**validated_data)
		# Get proper instances from related models
		meeting_category = MeetingCategory.objects.get(id = meeting_category_data.id)
		entity = Entity.objects.get(id = entity_data.id)
		# Create instances in the through models
		for participant in participants_data:
			Participant.objects.create(
				meeting = Meeting.objects.get(id = participant.meeting_id),
				person = Person.objects.get(id = participant.person_id), 
				is_invited = participant.is_invited
			)
		for meeting_subject in meeting_subjects_data:
			MeetingSubject.objects.create(
				meeting = Meeting.objects.get(id = participant.meeting_id),
				subject = Subject.objects.get(id = participant.subject_id),
				edited_headline = participant.edited_headline,
				edited_description = participant.edited_description,
				listposition_on_request = participant.listposition_on_request,
				listposition_on_report = participant.listposition_on_report
			)
		return meeting
		
	class Meta:
		model = Meeting
		fields = (
			# Relational data
			'meeting_category',
			'entity',
			'participants',
			'meeting_subjects',
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
