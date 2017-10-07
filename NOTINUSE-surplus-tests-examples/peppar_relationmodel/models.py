# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
# Core Databse 
from resources.models import Person, Entity, Property
from process.models import Plan, Action, Result

# PEP-PAR Universal relation model
@python_2_unicode_compatible  # only if you need to support Python 2
class PEPPARrelationCategory(models.Model):
    

# PEP-PAR Universal relation model
@python_2_unicode_compatible  # only if you need to support Python 2
class PEPPARrelation(models.Model):
    # ID
    person = models.ForeignKey(Person, on_delete=models.CASCADE, null=True, blank=True,)
    entity = models.ForeignKey(Entity, on_delete=models.CASCADE, null=True, blank=True,)
    property = models.ForeignKey(Property, on_delete=models.CASCADE, null=True, blank=True,)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True, blank=True,)
    result = models.ForeignKey(Result, on_delete=models.CASCADE, null=True, blank=True,)
    
    # relation = models.ForeignKey(PEPPARrelationCategory, on_delete=models.CASCADE)
   
    #created_time =
    def __str__(self):
        return (self.id)