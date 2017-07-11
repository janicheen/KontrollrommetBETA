# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
#Main tables
from .models import Person, Entity
#Category indexes
from .models import PersonfunctionCategory, EntityCategory
#Relation tables
from .models import PersonToEntityRelation

# Registered models
admin.site.register(Person)
admin.site.register(Entity)
admin.site.register(PersonfunctionCategory)
admin.site.register(EntityCategory)
admin.site.register(PersonToEntityRelation)
