from django.utils import timezone
from rest_framework.viewsets import ModelViewSet
# Models
from process_control.models import Case
# Serializers
from process_control.serializers import CaseSerializer

class CaseViewSet(ModelViewSet):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
    # Autoset timestamp with creator when saving
    def perform_create(self, obj):
        obj.save(case_createdBy=self.request.user, case_created=timezone.now())
