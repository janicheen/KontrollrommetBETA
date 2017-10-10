# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Django dependencies
from django.utils import timezone
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
# Models
from django.contrib.auth.models import User

### Case Model ###
# Case Model - Assigning case number that is hooked to all other case elements
class Case(models.Model):
	case_created = models.DateTimeField(default=timezone.now)
	case_createdBy = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
	case_ended = models.DateTimeField(blank=True, null=True)

	def __str__(self):
		return str(self.pk)
