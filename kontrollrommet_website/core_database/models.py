# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.utils.encoding import python_2_unicode_compatible

#Django User model
from django.contrib.auth.models import User


### Category lists### 
# Personfunction categories
@python_2_unicode_compatible  # only if you need to support Python 2
class PersonfunctionCategory(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

# Entity categories
@python_2_unicode_compatible  # only if you need to support Python 2
class EntityCategory(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

# EntityToProperty function categories
@python_2_unicode_compatible  # only if you need to support Python 2
class EntityToPropertyRelationCategory(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

### Indexes ###
# Person index
@python_2_unicode_compatible  # only if you need to support Python 2
class Person(models.Model):
	#Basic credentials
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	#Contact details

	#Attatched user identification
	user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)

	# Decorator that defines full_name as a model property
	@property
	def full_name(self):
		return '%s %s' % (self.first_name, self.last_name)

	def __str__(self):
		return '%s' % (self.full_name)

# Singal listener that automatically creates related Person instance, when new user is created 
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
	if created:
		Person.objects.create(user=instance)

# Signal listener, that automatically edits user entry in Person instance, when user is edited.
# PS! Should be looked at. 
# As long as the ID(primary key) is permanent, user data and person data can be edited separately, and be linked together.
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
	relatedperson = Person.objects.get(user=instance)
	relatedperson.user = instance
	relatedperson.save()

# Entity index
@python_2_unicode_compatible  # only if you need to support Python 2
class Entity(models.Model):
	name = models.CharField(max_length=50)
	category = models.ForeignKey(EntityCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s' % (self.name)

# Property index
@python_2_unicode_compatible  # only if you need to support Python 2
class Property(models.Model):
	name = models.CharField(max_length=100)

	def __str__(self):
		return '%s' % (self.name)

### Relation Tables
# Person to Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PersonToEntityRelation(models.Model):
	person = models.ForeignKey(Person, on_delete=models.CASCADE)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	function = models.ForeignKey(PersonfunctionCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s - %s - %s' % (self.person, self.function, self.entity)

# Entity to Property relation
class EntityToPropertyRelation(models.Model):
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	propertyitem = models.ForeignKey(Property, on_delete=models.CASCADE)
	relation = models.ForeignKey(EntityToPropertyRelationCategory, on_delete=models.CASCADE)



