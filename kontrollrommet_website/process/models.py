"""
This module defines the triangular model for Process.
It icludes the core models, relational models and category models to go with it.
"""

# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Django dependencies
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
#Django User model
from django.contrib.auth.models import User
# Models
from resources.models import Person, Entity, Property 


### Category models### 

# Plan Category
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Action Category
@python_2_unicode_compatible  # only if you need to support Python 2
class ActionCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Result Category
@python_2_unicode_compatible  # only if you need to support Python 2
class ResultCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Plan-to-Action relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanToActionRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Action-to-Result relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class ActionToResultRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Result-to-Plan relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class ResultToPlanRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

### Core Tables ###

# Plan Table
@python_2_unicode_compatible  # only if you need to support Python 2
class Plan(models.Model):
    # Basic credentials
    category = models.ForeignKey(PlanCategory, on_delete=models.CASCADE)
    executive_entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True)
    headline = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    def __str__(self):
        return '%s' % (self.headline)

# Action Table
@python_2_unicode_compatible  # only if you need to support Python 2
class Action(models.Model):
    category = models.ForeignKey(ActionCategory, on_delete=models.CASCADE)
    executive_entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True)
    headline = models.CharField(max_length=250)

    def __str__(self):
        return '%s' % (self.headline)

# Result Table
@python_2_unicode_compatible  # only if you need to support Python 2
class Result(models.Model):
    category = models.ForeignKey(ResultCategory, on_delete=models.CASCADE)
    executive_entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True)
    headline = models.CharField(max_length=250)
    def __str__(self):
        return '%s' % (self.headline)

### Relation Tables

# Plan-to-Action relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanToActionRelation(models.Model):
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    relation = models.ForeignKey(PlanToActionRelationCategory, on_delete=models.CASCADE)
    #created_time =
    def __str__(self):
        return '%s - %s - %s' % (self.plan, self.relation, self.action)

# Action-to-Result relation
class ActionToResultRelation(models.Model):
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    result = models.ForeignKey(Result, on_delete=models.CASCADE)
    relation = models.ForeignKey(ActionToResultRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.action, self.relation, self.result)

# Result-to-Plan relation
class ResultToPlanRelation(models.Model):
    result = models.ForeignKey(Result, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    relation = models.ForeignKey(ResultToPlanRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.result, self.relation, self.plan)


