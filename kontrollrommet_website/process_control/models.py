# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Django dependencies
from django.utils import timezone
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Models
from core_database.models import Entity, Person
from django.contrib.auth.models import User

### Category Models ###

# Subject-to-Entity Relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class SubjectToEntityRelationCategory(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)


### Case Model ###
# Case Model - Assigning case number that is hooked to all other case elements
class Case(models.Model):
	case_created = models.DateTimeField(default=timezone.now())
	case_createdBy = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
	def __str__(self):
		return str(self.id)
### Case Item Models ###

#Subject 
@python_2_unicode_compatible  # only if you need to support Python 2
class Subject(models.Model):
	case_number = models.ForeignKey(Case, on_delete=models.CASCADE)
	headline = models.CharField(max_length=300, blank=True)
	description = models.TextField(blank=True)

	def __str__(self):
		return '%s' % (self.headline)
	
# Subject-to-Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class SubjectToEntityRelation(models.Model):
	case_number = models.ForeignKey(Case, on_delete=models.CASCADE)
	subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	relation = models.ForeignKey(SubjectToEntityRelationCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s - %s - %s' % (self.subject, self.relation, self.entity)

# Subject-to-Person relation

