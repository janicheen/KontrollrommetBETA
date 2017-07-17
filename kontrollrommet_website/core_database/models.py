# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.encoding import python_2_unicode_compatible

### Category lists### 
# Personfunction categories
@python_2_unicode_compatible  # only if you need to support Python 2
class PersonfunctionCategory(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

# Entity categories
@python_2_unicode_compatible  # only if you need to support Python 2
class EntityCategory(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

# EntityToProperty function categories
@python_2_unicode_compatible  # only if you need to support Python 2
class EntityToPropertyRelationCategory(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)

	def __str__(self):
		return '%s' % (self.name)

### Indexes ###
# Person index

@python_2_unicode_compatible  # only if you need to support Python 2
class Person(models.Model):
	#id = models.AutoField(primary_key=True)
	first_name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50)
	user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)

	@property
	def full_name(self):
		return '%s %s' % (self.first_name, self.last_name)

	def __str__(self):
		return '%s' % (self.full_name)

# Automatic creation of Person model, when user is created
# Singal listener, automatic adds User to Person on creation
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Person.objects.create(user=instance)

# Automatic edit of Person model, when user is edited
# Signal listener, automatic edits user in person.
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    relatedperson = Person.objects.get(user=instance)
    relatedperson.user = instance
    relatedperson.save()

# Entity index
@python_2_unicode_compatible  # only if you need to support Python 2
class Entity(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=50)
	category = models.ForeignKey(EntityCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s' % (self.name)

# Property index
@python_2_unicode_compatible  # only if you need to support Python 2
class Property(models.Model):
	#id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=100)

	def __str__(self):
		return '%s' % (self.name)

### Relation Tables
# Person to Entity relation
@python_2_unicode_compatible  # only if you need to support Python 2
class PersonToEntityRelation(models.Model):
	#id = models.AutoField(primary_key=True)
	person = models.ForeignKey(Person, on_delete=models.CASCADE)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	function = models.ForeignKey(PersonfunctionCategory, on_delete=models.CASCADE)

	def __str__(self):
		return '%s - %s - %s' % (self.person, self.function, self.entity)

# Entity to Property relation
class EntityToPropertyRelation(models.Model):
	#id = models.AutoField(primary_key=True)
	entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
	propertyitem = models.ForeignKey(Property, on_delete=models.CASCADE)
	relation = models.ForeignKey(EntityToPropertyRelationCategory, on_delete=models.CASCADE)



