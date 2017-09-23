# REST framework dependencies
from rest_framework.serializers import ModelSerializer
# Models
from meeting_manager.models import MeetingCategory
from meeting_manager.models import Meeting
from meeting_manager.models import MeetingSubject, MeetingParticipant

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

class MeetingParticipantSerializer(ModelSerializer):

    class Meta:
        model = MeetingParticipant
        depth = 1
        fields = '__all__'
