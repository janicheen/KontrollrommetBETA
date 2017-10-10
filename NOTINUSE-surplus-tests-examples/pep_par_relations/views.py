from rest_framework.viewsets import ModelViewSet
from pep_par_relations.serializers import PersonToActionRelationCategorySerializer, ActionToEntityRelationCategorySerializer, EntityToPlanRelationCategorySerializer, PlanToPropertyRelationCategorySerializer, PropertyToResultRelationCategorySerializer, ResultToPersonRelationCategorySerializer, PlanToPersonRelationCategorySerializer, ActionToPropertyRelationCategorySerializer, ResultToEntityRelationCategorySerializer, PersonToActionRelationSerializer, ActionToEntityRelationSerializer, EntityToPlanRelationSerializer, PlanToPropertyRelationSerializer, PropertyToResultRelationSerializer, ResultToPersonRelationSerializer, PlanToPersonRelationSerializer, ActionToPropertyRelationSerializer, ResultToEntityRelationSerializer
from pep_par_relations.models import PersonToActionRelationCategory, ActionToEntityRelationCategory, EntityToPlanRelationCategory, PlanToPropertyRelationCategory, PropertyToResultRelationCategory, ResultToPersonRelationCategory, PlanToPersonRelationCategory, ActionToPropertyRelationCategory, ResultToEntityRelationCategory, PersonToActionRelation, ActionToEntityRelation, EntityToPlanRelation, PlanToPropertyRelation, PropertyToResultRelation, ResultToPersonRelation, PlanToPersonRelation, ActionToPropertyRelation, ResultToEntityRelation


class PersonToActionRelationCategoryViewSet(ModelViewSet):
    queryset = PersonToActionRelationCategory.objects.all()
    serializer_class = PersonToActionRelationCategorySerializer


class ActionToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = ActionToEntityRelationCategory.objects.all()
    serializer_class = ActionToEntityRelationCategorySerializer


class EntityToPlanRelationCategoryViewSet(ModelViewSet):
    queryset = EntityToPlanRelationCategory.objects.all()
    serializer_class = EntityToPlanRelationCategorySerializer


class PlanToPropertyRelationCategoryViewSet(ModelViewSet):
    queryset = PlanToPropertyRelationCategory.objects.all()
    serializer_class = PlanToPropertyRelationCategorySerializer


class PropertyToResultRelationCategoryViewSet(ModelViewSet):
    queryset = PropertyToResultRelationCategory.objects.all()
    serializer_class = PropertyToResultRelationCategorySerializer


class ResultToPersonRelationCategoryViewSet(ModelViewSet):
    queryset = ResultToPersonRelationCategory.objects.all()
    serializer_class = ResultToPersonRelationCategorySerializer


class PlanToPersonRelationCategoryViewSet(ModelViewSet):
    queryset = PlanToPersonRelationCategory.objects.all()
    serializer_class = PlanToPersonRelationCategorySerializer


class ActionToPropertyRelationCategoryViewSet(ModelViewSet):
    queryset = ActionToPropertyRelationCategory.objects.all()
    serializer_class = ActionToPropertyRelationCategorySerializer


class ResultToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = ResultToEntityRelationCategory.objects.all()
    serializer_class = ResultToEntityRelationCategorySerializer


class PersonToActionRelationViewSet(ModelViewSet):
    queryset = PersonToActionRelation.objects.all()
    serializer_class = PersonToActionRelationSerializer


class ActionToEntityRelationViewSet(ModelViewSet):
    queryset = ActionToEntityRelation.objects.all()
    serializer_class = ActionToEntityRelationSerializer


class EntityToPlanRelationViewSet(ModelViewSet):
    queryset = EntityToPlanRelation.objects.all()
    serializer_class = EntityToPlanRelationSerializer


class PlanToPropertyRelationViewSet(ModelViewSet):
    queryset = PlanToPropertyRelation.objects.all()
    serializer_class = PlanToPropertyRelationSerializer


class PropertyToResultRelationViewSet(ModelViewSet):
    queryset = PropertyToResultRelation.objects.all()
    serializer_class = PropertyToResultRelationSerializer


class ResultToPersonRelationViewSet(ModelViewSet):
    queryset = ResultToPersonRelation.objects.all()
    serializer_class = ResultToPersonRelationSerializer


class PlanToPersonRelationViewSet(ModelViewSet):
    queryset = PlanToPersonRelation.objects.all()
    serializer_class = PlanToPersonRelationSerializer


class ActionToPropertyRelationViewSet(ModelViewSet):
    queryset = ActionToPropertyRelation.objects.all()
    serializer_class = ActionToPropertyRelationSerializer


class ResultToEntityRelationViewSet(ModelViewSet):
    queryset = ResultToEntityRelation.objects.all()
    serializer_class = ResultToEntityRelationSerializer
