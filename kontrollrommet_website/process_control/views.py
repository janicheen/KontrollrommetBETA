from django.utils import timezone
from rest_framework.viewsets import ModelViewSet

from process_control.serializers import SubjectToEntityRelationCategorySerializer, CaseSerializer, SubjectSerializer, SubjectToEntityRelationSerializer
from process_control.models import SubjectToEntityRelationCategory, Case, Subject, SubjectToEntityRelation


class SubjectToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = SubjectToEntityRelationCategory.objects.all()
    serializer_class = SubjectToEntityRelationCategorySerializer


class CaseViewSet(ModelViewSet):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
    # Autoset timestamp with creator when saving
    def perform_create(self, obj):
        obj.save(case_createdBy=self.request.user, case_created=timezone.now())


class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class SubjectToEntityRelationViewSet(ModelViewSet):
    queryset = SubjectToEntityRelation.objects.all()
    serializer_class = SubjectToEntityRelationSerializer
