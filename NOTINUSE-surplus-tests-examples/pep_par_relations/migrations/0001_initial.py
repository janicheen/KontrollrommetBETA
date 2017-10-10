# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-07 20:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('resources', '0004_auto_20170930_0046'),
        ('process', '0004_auto_20170924_2025'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActionToEntityRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Action')),
                ('entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Entity')),
            ],
        ),
        migrations.CreateModel(
            name='ActionToEntityRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ActionToPropertyRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Action')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Property')),
            ],
        ),
        migrations.CreateModel(
            name='ActionToPropertyRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='EntityToPlanRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Entity')),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Plan')),
            ],
        ),
        migrations.CreateModel(
            name='EntityToPlanRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PersonToActionRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Action')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Person')),
            ],
        ),
        migrations.CreateModel(
            name='PersonToActionRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PlanToPersonRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Person')),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Plan')),
            ],
        ),
        migrations.CreateModel(
            name='PlanToPersonRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PlanToPropertyRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Plan')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Property')),
            ],
        ),
        migrations.CreateModel(
            name='PlanToPropertyRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PropertyToResultRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Property')),
            ],
        ),
        migrations.CreateModel(
            name='PropertyToResultRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ResultToEntityRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Entity')),
            ],
        ),
        migrations.CreateModel(
            name='ResultToEntityRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ResultToPersonRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resources.Person')),
            ],
        ),
        migrations.CreateModel(
            name='ResultToPersonRelationCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='resulttopersonrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.ResultToPersonRelationCategory'),
        ),
        migrations.AddField(
            model_name='resulttopersonrelation',
            name='result',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Result'),
        ),
        migrations.AddField(
            model_name='resulttoentityrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.ResultToEntityRelationCategory'),
        ),
        migrations.AddField(
            model_name='resulttoentityrelation',
            name='result',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Result'),
        ),
        migrations.AddField(
            model_name='propertytoresultrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.PropertyToResultRelationCategory'),
        ),
        migrations.AddField(
            model_name='propertytoresultrelation',
            name='result',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='process.Result'),
        ),
        migrations.AddField(
            model_name='plantopropertyrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.PlanToPropertyRelationCategory'),
        ),
        migrations.AddField(
            model_name='plantopersonrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.PlanToPersonRelationCategory'),
        ),
        migrations.AddField(
            model_name='persontoactionrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.PersonToActionRelationCategory'),
        ),
        migrations.AddField(
            model_name='entitytoplanrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.EntityToPlanRelationCategory'),
        ),
        migrations.AddField(
            model_name='actiontopropertyrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.ActionToPropertyRelationCategory'),
        ),
        migrations.AddField(
            model_name='actiontoentityrelation',
            name='relation_category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pep_par_relations.ActionToEntityRelationCategory'),
        ),
    ]
