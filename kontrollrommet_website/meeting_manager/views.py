from rest_framework.viewsets import ModelViewSet
# Serializers
from meeting_manager.serializers import MeetingCategorySerializer 
from meeting_manager.serializers import MeetingSerializer
from meeting_manager.serializers import MeetingSubjectSerializer, MeetingParticipantSerializer
# Models
from meeting_manager.models import MeetingCategory
from meeting_manager.models import Meeting
from meeting_manager.models import MeetingSubject, MeetingParticipant

class MeetingCategoryViewSet(ModelViewSet):
    queryset = MeetingCategory.objects.all()
    serializer_class = MeetingCategorySerializer

class MeetingViewSet(ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

class MeetingSubjectViewSet(ModelViewSet):
    queryset = MeetingSubject.objects.all()
    serializer_class = MeetingSubjectSerializer

class MeetingParticipantViewSet(ModelViewSet):
    queryset = MeetingParticipant.objects.all()
    serializer_class = MeetingParticipantSerializer
