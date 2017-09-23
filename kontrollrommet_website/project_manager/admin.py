# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin

from .models import PlanCategory, ActionCategory, ResultCategory
from .models import PlanToActionRelationCategory, ActionToResultRelationCategory, ResultToPlanRelationCategory
from .models import Plan, Action, Result
from .models import PlanToActionRelation, ActionToResultRelation, ResultToPlanRelation

# Registered models
admin.site.register(PlanCategory)
admin.site.register(ActionCategory)
admin.site.register(ResultCategory)
admin.site.register(PlanToActionRelationCategory)
admin.site.register(ActionToResultRelationCategory)
admin.site.register(ResultToPlanRelationCategory)

admin.site.register(Plan)
admin.site.register(Action)
admin.site.register(Result)

admin.site.register(PlanToActionRelation)
admin.site.register(ActionToResultRelation)
admin.site.register(ResultToPlanRelation)
