# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
# Core Databse 
from resources.models import Person, Entity, Property
from process.models import Plan, Action, Result

### Categories 

# Person-to-Action relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class PersonToActionRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Action-to-Entity relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class ActionToEntityRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Entity-to-Plan relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class EntityToPlanRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Plan-to-Property relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanToPropertyRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Property-to-Result relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class PropertyToResultRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Result-to-Person relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class ResultToPersonRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Plan-to-Person relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanToPersonRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Action-to-Property relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class ActionToPropertyRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

# Result-to-Entity relation category
@python_2_unicode_compatible  # only if you need to support Python 2
class ResultToEntityRelationCategory(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return '%s' % (self.name)

### Relational models

# Person-to-Action relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PersonToActionRelation(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(PersonToActionRelationCategory, on_delete=models.CASCADE)
    #created_time =
    def __str__(self):
        return '%s - %s - %s' % (self.person, self.relation_category, self.action)

# Action-to-Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class ActionToEntityRelation(models.Model):
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(ActionToEntityRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.action, self.relation_category, self.entity)

# Entity-to-Plan relation
@python_2_unicode_compatible  # only if you need to support Python 2
class EntityToPlanRelation(models.Model):
    entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(EntityToPlanRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.entity, self.relation_category, self.plan)

# Plan-to-Property relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanToPropertyRelation(models.Model):
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(PlanToPropertyRelationCategory, on_delete=models.CASCADE)
    #created_time =
    def __str__(self):
        return '%s - %s - %s' % (self.plan, self.relation_category, self.property)

# Property-to-Result relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PropertyToResultRelation(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    result = models.ForeignKey(Result, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(PropertyToResultRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.property, self.relation_category, self.result)

# Result-to-Person relation
@python_2_unicode_compatible  # only if you need to support Python 2
class ResultToPersonRelation(models.Model):
    result = models.ForeignKey(Result, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(ResultToPersonRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.result, self.relation_category, self.person)

# Plan-to-Person relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PlanToPersonRelation(models.Model):
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(PlanToPersonRelationCategory, on_delete=models.CASCADE)
    #created_time =
    def __str__(self):
        return '%s - %s - %s' % (self.plan, self.relation_category, self.person)

# Action-to-Property relation
@python_2_unicode_compatible  # only if you need to support Python 2
class ActionToPropertyRelation(models.Model):
    action = models.ForeignKey(Action, on_delete=models.CASCADE)
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(ActionToPropertyRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.action, self.relation_category, self.property)

# Result-to-Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class ResultToEntityRelation(models.Model):
    result = models.ForeignKey(Result, on_delete=models.CASCADE)
    entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
    relation_category = models.ForeignKey(ResultToEntityRelationCategory, on_delete=models.CASCADE)
    #created_time = 
    def __str__(self):
        return '%s - %s - %s' % (self.result, self.relation_category, self.entity)
