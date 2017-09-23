# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin

from .models import PersonCategory, EntityCategory, PropertyCategory
from .models import PersonToEntityRelationCategory, EntityToPropertyRelationCategory, PropertyToPersonRelationCategory
from .models import Person, Entity, Property
from .models import PersonToEntityRelation, EntityToPropertyRelation, PropertyToPersonRelation

# Registered models
admin.site.register(PersonCategory)
admin.site.register(EntityCategory)
admin.site.register(PropertyCategory)
admin.site.register(PersonToEntityRelationCategory)
admin.site.register(EntityToPropertyRelationCategory)
admin.site.register(PropertyToPersonRelationCategory)

admin.site.register(Person)
admin.site.register(Entity)
admin.site.register(Property)

admin.site.register(PersonToEntityRelation)
admin.site.register(EntityToPropertyRelation)
admin.site.register(PropertyToPersonRelation)
