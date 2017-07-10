# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Meeting, Participant, Meetingsubject, MeetingCategory

admin.site.register(Meeting)
admin.site.register(Participant)
admin.site.register(Meetingsubject)
admin.site.register(MeetingCategory)