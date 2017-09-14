# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-12 17:01
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('process_control', '0001_initial'),
        ('core_database', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('requested_meetdate', models.DateField(blank=True, null=True)),
                ('meetingrequest_sent', models.DateTimeField(blank=True, null=True)),
                ('meeting_started', models.DateTimeField(blank=True, null=True)),
                ('meeting_completed', models.DateTimeField(blank=True, null=True)),
                ('report_started', models.DateTimeField(blank=True, null=True)),
                ('report_completed', models.DateTimeField(blank=True, null=True)),
                ('is_current_meeting', models.BooleanField(default=False)),
                ('entity', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core_database.Entity')),
            ],
        ),
        migrations.CreateModel(
            name='MeetingCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MeetingSubject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('edited_headline', models.CharField(blank=True, max_length=300)),
                ('edited_description', models.TextField(blank=True)),
                ('listposition_on_request', models.IntegerField(blank=True, null=True)),
                ('listposition_on_report', models.IntegerField(blank=True, null=True)),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meeting_manager.Meeting')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process_control.Subject')),
            ],
            options={
                'ordering': ('meeting', 'listposition_on_request'),
            },
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_invited', models.BooleanField(default=False)),
                ('is_attending', models.BooleanField(default=False)),
                ('is_leading', models.BooleanField(default=False)),
                ('is_reporting', models.BooleanField(default=False)),
                ('accepted_invite', models.DateTimeField(blank=True, null=True)),
                ('sent_meetingrequest', models.DateTimeField(blank=True, null=True)),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meeting_manager.Meeting')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core_database.Person')),
            ],
            options={
                'ordering': ('meeting', 'person__first_name'),
            },
        ),
        migrations.AddField(
            model_name='meeting',
            name='meeting_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meeting_manager.MeetingCategory'),
        ),
        migrations.AddField(
            model_name='meeting',
            name='meeting_subjects',
            field=models.ManyToManyField(through='meeting_manager.MeetingSubject', to='process_control.Subject'),
        ),
        migrations.AddField(
            model_name='meeting',
            name='participants',
            field=models.ManyToManyField(through='meeting_manager.Participant', to='core_database.Person'),
        ),
        migrations.AlterUniqueTogether(
            name='participant',
            unique_together=set([('meeting', 'person')]),
        ),
        migrations.AlterUniqueTogether(
            name='meetingsubject',
            unique_together=set([('meeting', 'listposition_on_report'), ('meeting', 'subject'), ('meeting', 'listposition_on_request')]),
        ),
    ]
