# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-23 16:27
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('process_control', '0011_auto_20170923_1825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='case_created',
            field=models.DateTimeField(default=datetime.datetime(2017, 9, 23, 16, 27, 49, 448555, tzinfo=utc)),
        ),
    ]
