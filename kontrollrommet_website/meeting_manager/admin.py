# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import MeetingCategory 
from .models import Meeting 
from .models import MeetingSubject, MeetingParticipant

admin.site.register(MeetingCategory)

admin.site.register(Meeting)

admin.site.register(MeetingSubject)
admin.site.register(MeetingParticipant)
