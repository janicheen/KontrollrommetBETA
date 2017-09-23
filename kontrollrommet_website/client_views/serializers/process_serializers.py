# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# REST Framework dependencies
from rest_framework.serializers import ModelSerializer
# Models
from process.models import PlanCategory, ActionCategory, ResultCategory 
from process.models import PlanToActionRelationCategory, ActionToResultRelationCategory, ResultToPlanRelationCategory 
from process.models import Plan, Action, Result
from process.models import PlanToActionRelation, ActionToResultRelation, ResultToPlanRelation

#  Plan
class PlanSerializer(ModelSerializer):

    class Meta:
        model = Plan
        depth = 0
        fields = '__all__'

# Action
class ActionSerializer(ModelSerializer):

    class Meta:
        model = Action
        depth = 0
        fields = '__all__'

# Result
class ResultSerializer(ModelSerializer):

    class Meta:
        model = Result
        depth = 0
        fields = '__all__'


