# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies

# REST Framework dependencies
from rest_framework import serializers

# Django User Model
from django.contrib.auth.models import User

# Core Data Models
from core_database.models import Entity, Person, PersonToEntityRelation
# Action Data Model
from process_control.models import SubjectToEntityRelation
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
	class Meta:
		model = Entity
		fields = (
			'id', 
			'name', 
			'category'
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
	entity_id = serializers.ReadOnlyField(source='entity.id')
	entity_name = serializers.ReadOnlyField(source='entity.name')
	function = serializers.StringRelatedField()
	class Meta:
		model = PersonToEntityRelation
		fields = (
			'entity_id', 
			'entity_name', 
			'function'
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
		fields = ('subject_id', 'headline', 'description', 'relation')


### Application Serializers

# Serializes meeting participants in meeting_manager
class ParticipantSerializer(serializers.ModelSerializer):
	id = serializers.ReadOnlyField(source='person.id')
	first_name = serializers.ReadOnlyField(source='person.first_name')
	last_name = serializers.ReadOnlyField(source='person.last_name')
	class Meta:
		model = Participant
		fields = (
			'id',
			'first_name',
			'last_name',
			'sent_meetingrequest',
			'is_invited',
			'accepted_invite',
			'is_attending',
			'is_leading',
			'is_reporting'
			)

# Serializes meeting subjects in meeting_manager
class MeetingsubjectSerializer(serializers.ModelSerializer):
	id = serializers.ReadOnlyField(source='subject.id')
	headline = serializers.ReadOnlyField(source='subject.headline')
	class Meta:
		model = MeetingSubject
		fields = (
			'id',
			'headline',
			'listposition_on_request',
			'listposition_on_report'
			   )

# Serializes Meetings
class MeetingSerializer(serializers.ModelSerializer):
	participants = ParticipantSerializer(source='participant_set', many=True)
	meeting_subjects = MeetingsubjectSerializer(source='meetingsubject_set', many=True)
	meeting_category = serializers.StringRelatedField()
	entity = serializers.StringRelatedField()
	class Meta:
		model = Meeting
		fields = (
			'id', 
			'meeting_category', 
			'entity', 
			'requested_meetdate', 
			'participants', 
			'meeting_subjects'
			)
