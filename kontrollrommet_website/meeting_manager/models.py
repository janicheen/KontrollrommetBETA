# -*- coding: utf-8 -*-
from __future__ import unicode_literals
#Django dependencies
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
# Models
from resources.models import Person, Entity, Property 
from process.models import Plan, Action, Result 
from django.contrib.auth.models import User


### Category models ###

# Meeting category
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

### Core Meeting Models ###

# Meeting
@python_2_unicode_compatible  # only if you need to support Python 2
class Meeting(models.Model):
    # Category
    meeting_category = models.ForeignKey(MeetingCategory, on_delete=models.CASCADE)
    # Data relating to resources
    executive_entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True)
    meetingparticipants = models.ManyToManyField(Person, through='MeetingParticipant')
    # Data relating to process
    meetingsubjects = models.ManyToManyField(Plan, through='Meetingsubject')
    # Dates
    requested_meetdate = models.DateField(blank=True, null=True)
    # Time Stamps
    meetingrequest_created = models.DateTimeField(blank=True, null=True)
    meetingrequest_sent = models.DateTimeField(blank=True, null=True)
    meeting_started = models.DateTimeField(blank=True, null=True)
    meeting_completed = models.DateTimeField(blank=True, null=True)
    report_started = models.DateTimeField(blank=True, null=True)
    report_completed = models.DateTimeField(blank=True, null=True)
    # Log data
    # meetingrequest_createdBy = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # Boolean
    is_current_meeting = models.BooleanField(default=False)

    def __str__(self):
        return '%s - %s - %s' % (self.meeting_category, self.executive_entity, self.requested_meetdate)


### Relational data

#Plan To Meeting Relation
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingSubject(models.Model):
    plan_item = models.ForeignKey(Plan, on_delete=models.CASCADE)
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    # Meeting Request data
    request_headline = models.CharField(max_length=300, blank=True)
    request_description = models.TextField(blank=True)
    listposition_on_request = models.IntegerField(blank=True, null=True)
    # Meeting Report data
    report_headline = models.CharField(max_length=300, blank=True)
    report_description = models.TextField(blank=True)
    listposition_on_report = models.IntegerField(blank=True, null=True)
    report_text = models.TextField(blank=True)

    def __str__(self):
        return '%s - %s' % (self.meeting, self.plan_item)

    class Meta:
        # Forbids a meeting subject to have the same listposition in the same meeting
        # Forbids a meeting to have several instances of the same meeting subject
        unique_together = (('meeting', 'plan_item'), ('meeting', 'listposition_on_request'), ('meeting', 'listposition_on_report'))
        ordering = ('meeting', 'listposition_on_request')

# Person to Meeting Relation
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingParticipant(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    # Data
    is_invited = models.BooleanField(default=False)
    is_attending = models.BooleanField(default=False)
    is_leading = models.BooleanField(default=False)
    is_reporting = models.BooleanField(default=False)
    accepted_invite = models.DateTimeField(blank=True, null=True)
    sent_meetingrequest = models.DateTimeField(blank=True, null=True)
    wrote_meetingreport = models.DateTimeField(blank=True, null=True)

    class Meta:
        #Forbids a person to be registered to the same meeting more than once
        unique_together = ('meeting', 'person',)
        ordering = ('meeting', 'person__first_name')

    def __str__(self):
        return '%s - %s' % (self.person, self.meeting)

