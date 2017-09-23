# Rest Framework dependencies
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
# Serializers
from process.serializers import PlanCategorySerializer, ActionCategorySerializer, ResultCategorySerializer 
from process.serializers import PlanToActionRelationCategorySerializer, ActionToResultRelationCategorySerializer, ResultToPlanRelationCategorySerializer
from process.serializers import PlanSerializer, ActionSerializer, ResultSerializer
from process.serializers import PlanToActionRelationSerializer, ActionToResultRelationSerializer, ResultToPlanRelationSerializer
# Models
from process.models import PlanCategory, ActionCategory, ResultCategory 
from process.models import PlanToActionRelationCategory, ActionToResultRelationCategory, ResultToPlanRelationCategory
from process.models import Plan, Action, Result
from process.models import PlanToActionRelation, ActionToResultRelation, ResultToPlanRelation

### Category Viewsets ###
class PlanCategoryViewSet(ModelViewSet):
    queryset = PlanCategory.objects.all()
    serializer_class = PlanCategorySerializer

class ActionCategoryViewSet(ModelViewSet):
    queryset = ActionCategory.objects.all()
    serializer_class = ActionCategorySerializer

class ResultCategoryViewSet(ModelViewSet):
    queryset = ResultCategory.objects.all()
    serializer_class = ResultCategorySerializer

class PlanToActionRelationCategoryViewSet(ModelViewSet):
    queryset = PlanToActionRelationCategory.objects.all()
    serializer_class = PlanToActionRelationCategorySerializer

class ActionToResultRelationCategoryViewSet(ModelViewSet):
    queryset = ActionToResultRelationCategory.objects.all()
    serializer_class = ActionToResultRelationCategorySerializer

class ResultToPlanRelationCategoryViewSet(ModelViewSet):
    queryset = ResultToPlanRelationCategory.objects.all()
    serializer_class = ResultToPlanRelationCategorySerializer


### Core Model Viewsets ###
class PlanViewSet(ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class ActionViewSet(ModelViewSet):
    queryset = Action.objects.all()
    serializer_class = ActionSerializer

class ResultViewSet(ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

### Relational viewsets ###
class PlanToActionRelationViewSet(ModelViewSet):
    queryset = PlanToActionRelation.objects.all()
    serializer_class = PlanToActionRelationSerializer

class ActionToResultRelationViewSet(ModelViewSet):
    queryset = ActionToResultRelation.objects.all()
    serializer_class = ActionToResultRelationSerializer

class ResultToPlanRelationViewSet(ModelViewSet):
    queryset = ResultToPlanRelation.objects.all()
    serializer_class = ResultToPlanRelationSerializer

