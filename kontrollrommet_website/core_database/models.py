# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
### Category lists### 
# Entity categories
class EntityCategory(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)

# Person Function categories

### Indexes ###
# Person index
class Person(models.Model):
	#id = models.AutoField(primary_key=True)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	isuser = models.BooleanField(default=False)
# Entity index
class Entity(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	category = models.ForeignKey(EntityCategory, on_delete=models.CASCADE)
# Property index
class Property(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=100)



