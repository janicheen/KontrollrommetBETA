# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-23 15:50
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('process_control', '0009_auto_20170923_1738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='case_created',
            field=models.DateTimeField(default=datetime.datetime(2017, 9, 23, 15, 50, 44, 765856, tzinfo=utc)),
        ),
    ]
