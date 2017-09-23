# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import MeetingCategory, SubjectCategory, SubjectToEntityRelationCategory
from .models import Meeting, Subject 
from .models import MeetingSubject, MeetingParticipant, SubjectToEntityRelation

admin.site.register(MeetingCategory)
admin.site.register(SubjectToEntityRelationCategory)

admin.site.register(Meeting)
admin.site.register(Subject)

admin.site.register(MeetingSubject)
admin.site.register(MeetingParticipant)
admin.site.register(SubjectToEntityRelation)
