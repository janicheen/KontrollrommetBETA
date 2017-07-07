# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

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
	user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)

# 
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Person.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.person.save()

# Entity index
class Entity(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	category = models.ForeignKey(EntityCategory, on_delete=models.CASCADE)
# Property index
class Property(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=100)



