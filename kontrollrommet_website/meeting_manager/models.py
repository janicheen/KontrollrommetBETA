# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Models
from core_database.models import Entity, Person


### Category indexes ###

# Meeting categories
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingCategory(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)


### Main Meeting Table ### 

# Meetings
@python_2_unicode_compatible  # only if you need to support Python 2
class Meeting(models.Model):
	#id = models.AutoField(primary_key=True)
	meeting_category = models.ForeignKey(MeetingCategory, on_delete=models.CASCADE)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True)
	
	requested_meetdate = models.DateField(blank=True, null=True)
	meetingrequest_sent = models.DateTimeField(blank=True, null=True)
	meeting_started = models.DateTimeField(blank=True, null=True)
	meeting_completed = models.DateTimeField(blank=True, null=True)
	report_started = models.DateTimeField(blank=True, null=True)
	report_completed = models.DateTimeField(blank=True, null=True)
	is_current_meeting = models.BooleanField(default=False)
	
	participants = models.ManyToManyField(Person, through='Participant')
	meeting_subjects = models.ManyToManyField('Subject', through='Meetingsubject')

	def __str__(self):
		return '%s - %s - %s' % (self.meeting_category, self.entity, self.requested_meetdate)

#Subjects 
@python_2_unicode_compatible  # only if you need to support Python 2
class Subject(models.Model):
	headline = models.CharField(max_length=300, blank=True)
	description = models.TextField(blank=True)

	def __str__(self):
		return '%s' % (self.headline)

### Relational tables

#Meeting Subjects 
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingSubject(models.Model):
	meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
	subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
	edited_headline = models.CharField(max_length=300, blank=True)
	edited_description = models.TextField(blank=True)
	listposition_on_request = models.IntegerField(blank=True, null=True)
	listposition_on_report = models.IntegerField(blank=True, null=True)

	def __str__(self):
		return '%s - %s' % (self.meeting, self.subject)

	class Meta:
		unique_together = (('meeting', 'subject'), ('meeting', 'listposition_on_request'), ('meeting', 'listposition_on_report'))
		ordering = ('meeting', 'listposition_on_request')

# Participants
@python_2_unicode_compatible  # only if you need to support Python 2
class Participant(models.Model):
	#id = models.AutoField(primary_key=True)
	meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
	person = models.ForeignKey(Person, on_delete=models.CASCADE)
	sent_meetingrequest = models.BooleanField(default=False)
	is_invited = models.BooleanField(default=False)
	accepted_invite = models.DateTimeField(blank=True, null=True)
	is_attending = models.BooleanField(default=False)
	is_leading = models.BooleanField(default=False)
	is_reporting = models.BooleanField(default=False)
	
	#Forbids a person to be registered to the same meeting more than once
	class Meta:
		unique_together = ('meeting', 'person',)
		ordering = ('meeting', 'person__first_name')

	def __str__(self):
		return '%s - %s' % (self.person, self.meeting)


# SubjectToEntity relation categories
@python_2_unicode_compatible  # only if you need to support Python 2
class SubjectToEntityRelationCategory(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

# Subject to Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class SubjectToEntityRelation(models.Model):
	subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	relation = models.ForeignKey(SubjectToEntityRelationCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s - %s - %s' % (self.subject, self.relation, self.entity)


