# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-23 11:27
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core_database', '0004_personcategory_propertycategory_propertytopersonrelationcategory'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entitytopropertyrelation',
            old_name='propertyitem',
            new_name='_property',
        ),
    ]
