# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
# Registered models
from .models import PersonToActionRelationCategory
from .models import PersonToActionRelation
from .models import ActionToEntityRelationCategory
from .models import ActionToEntityRelation
from .models import EntityToPlanRelationCategory
from .models import EntityToPlanRelation
from .models import PlanToPropertyRelationCategory
from .models import PlanToPropertyRelation
from .models import PropertyToResultRelationCategory
from .models import PropertyToResultRelation
from .models import ResultToPersonRelationCategory
from .models import ResultToPersonRelation
from .models import PlanToPersonRelationCategory
from .models import PlanToPersonRelation
from .models import ActionToPropertyRelationCategory
from .models import ActionToPropertyRelation
from .models import ResultToEntityRelationCategory
from .models import ResultToEntityRelation

admin.site.register(PersonToActionRelationCategory)
admin.site.register(PersonToActionRelation)
admin.site.register(ActionToEntityRelationCategory)
admin.site.register(ActionToEntityRelation)
admin.site.register(EntityToPlanRelationCategory)
admin.site.register(EntityToPlanRelation)
admin.site.register(PlanToPropertyRelationCategory)
admin.site.register(PlanToPropertyRelation)
admin.site.register(PropertyToResultRelationCategory)
admin.site.register(PropertyToResultRelation)
admin.site.register(ResultToPersonRelationCategory)
admin.site.register(ResultToPersonRelation)
admin.site.register(PlanToPersonRelationCategory)
admin.site.register(PlanToPersonRelation)
admin.site.register(ActionToPropertyRelationCategory)
admin.site.register(ActionToPropertyRelation)
admin.site.register(ResultToEntityRelationCategory)
admin.site.register(ResultToEntityRelation)

