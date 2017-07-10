# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Person, Entity, PersonfunctionCategory, EntityCategory

admin.site.register(Person)
admin.site.register(Entity)
admin.site.register(PersonfunctionCategory)
admin.site.register(EntityCategory)