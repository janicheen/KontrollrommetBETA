# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Meeting, Participant, Subject, MeetingSubject, MeetingCategory

admin.site.register(Meeting)
admin.site.register(Subject)
admin.site.register(Participant)
admin.site.register(MeetingSubject)
admin.site.register(MeetingCategory)