# REST framework dependencies
from rest_framework.serializers import ModelSerializer
# Models
from process_control.models import Case

class CaseSerializer(ModelSerializer):

    class Meta:
        model = Case
        depth = 0
        fields = '__all__'
