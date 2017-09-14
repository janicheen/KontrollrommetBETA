from rest_framework.viewsets import ModelViewSet
from process_control.serializers import SubjectToEntityRelationCategorySerializer, CaseSerializer, SubjectSerializer, SubjectToEntityRelationSerializer
from process_control.models import SubjectToEntityRelationCategory, Case, Subject, SubjectToEntityRelation


class SubjectToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = SubjectToEntityRelationCategory.objects.all()
    serializer_class = SubjectToEntityRelationCategorySerializer


class CaseViewSet(ModelViewSet):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer


class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class SubjectToEntityRelationViewSet(ModelViewSet):
    queryset = SubjectToEntityRelation.objects.all()
    serializer_class = SubjectToEntityRelationSerializer
