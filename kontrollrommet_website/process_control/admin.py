# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Case, Subject, SubjectToEntityRelationCategory, SubjectToEntityRelation

admin.site.register(Case)
admin.site.register(SubjectToEntityRelationCategory)
admin.site.register(SubjectToEntityRelation)
