# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from core_database.models import Entity, Person

### SUBJECTS - temporarily the only process being used, so it is defined as its own model
# Later this will be entered into a larger model called Process, where Subject will become a category.
# Mayby also rename it

# Subject-to-Entity Relation categories
@python_2_unicode_compatible  # only if you need to support Python 2
class SubjectToEntityRelationCategory(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

#Subject 
@python_2_unicode_compatible  # only if you need to support Python 2
class Subject(models.Model):
	headline = models.CharField(max_length=300, blank=True)
	description = models.TextField(blank=True)

	def __str__(self):
		return '%s' % (self.headline)
	
# Subject-to-Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class SubjectToEntityRelation(models.Model):
	subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	relation = models.ForeignKey(SubjectToEntityRelationCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s - %s - %s' % (self.subject, self.relation, self.entity)

# Subject-to-Person relation

