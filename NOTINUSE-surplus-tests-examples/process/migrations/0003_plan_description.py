# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-23 19:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('process', '0002_auto_20170923_2100'),
    ]

    operations = [
        migrations.AddField(
            model_name='plan',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
