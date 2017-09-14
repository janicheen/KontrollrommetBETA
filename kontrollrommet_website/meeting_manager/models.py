# -*- coding: utf-8 -*-
from __future__ import unicode_literals

#Django dependencies
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Models
from core_database.models import Entity, Person
from process_control.models import Subject
from django.contrib.auth.models import User


### Category models ###

# Meeting category
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)


### Main Meeting Table ###

# Meeting
@python_2_unicode_compatible  # only if you need to support Python 2
class Meeting(models.Model):
    # Simple Relational data
    meeting_category = models.ForeignKey(MeetingCategory, on_delete=models.CASCADE)
    entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True)
    # Relational data with added through model
    participants = models.ManyToManyField(Person, through='Participant')
    meeting_subjects = models.ManyToManyField(Subject, through='Meetingsubject')
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
        return '%s - %s - %s' % (self.meeting_category, self.entity, self.requested_meetdate)


### Relational data for Persons and Subjects in Meeting

#Meeting Subjects
@python_2_unicode_compatible  # only if you need to support Python 2
class MeetingSubject(models.Model):
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    # Meeting Request data
    request_headline = models.CharField(max_length=300, blank=True)
    request_description = models.TextField(blank=True)
    listposition_on_request = models.IntegerField(blank=True, null=True)
    # Meeting Report data
    report_headline = models.CharField(max_length=300, blank=True)
    report_description = models.TextField(blank=True)
    report_text = models.TextField(blank=True)
    listposition_on_report = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return '%s - %s' % (self.meeting, self.subject)

    class Meta:
        # Forbids a meeting subject to have the same listposition in the same meeting
        # Forbids a meeting to have several instances of the same meeting subject
        unique_together = (('meeting', 'subject'), ('meeting', 'listposition_on_request'), ('meeting', 'listposition_on_report'))
        ordering = ('meeting', 'listposition_on_request')

# Meeting Participants
@python_2_unicode_compatible  # only if you need to support Python 2
class Participant(models.Model):
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)

    is_invited = models.BooleanField(default=False)
    is_attending = models.BooleanField(default=False)
    is_leading = models.BooleanField(default=False)
    is_reporting = models.BooleanField(default=False)
    accepted_invite = models.DateTimeField(blank=True, null=True)
    sent_meetingrequest = models.DateTimeField(blank=True, null=True)

    class Meta:
        #Forbids a person to be registered to the same meeting more than once
        unique_together = ('meeting', 'person',)
        ordering = ('meeting', 'person__first_name')

    def __str__(self):
        return '%s - %s' % (self.person, self.meeting)
