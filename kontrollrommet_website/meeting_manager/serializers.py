# REST framework dependencies
from rest_framework.serializers import ModelSerializer
# Models
from meeting_manager.models import MeetingCategory
from meeting_manager.models import Meeting
from meeting_manager.models import MeetingSubject, MeetingParticipant
# Dynamic Serializer
from client_views.serializers import DynamicFieldsModelSerializer

class MeetingCategorySerializer(ModelSerializer):

    class Meta:
        model = MeetingCategory
        depth = 0
        fields = '__all__'

class MeetingSerializer(ModelSerializer):

    class Meta:
        model = Meeting
        depth = 1
        fields = '__all__'

class MeetingSubjectSerializer(ModelSerializer):

    class Meta:
        model = MeetingSubject
        depth = 1
        fields = '__all__'

class MeetingParticipantSerializer(DynamicFieldsModelSerializer):

    class Meta:
        model = MeetingParticipant
        depth = 2
        fields = '__all__'
