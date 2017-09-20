from rest_framework.viewsets import ModelViewSet
from meeting_manager.serializers import MeetingCategorySerializer, MeetingSerializer, MeetingSubjectSerializer, ParticipantSerializer
from meeting_manager.models import MeetingCategory, Meeting, MeetingSubject, Participant


class MeetingCategoryViewSet(ModelViewSet):
    queryset = MeetingCategory.objects.all()
    serializer_class = MeetingCategorySerializer


class MeetingViewSet(ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer


class MeetingSubjectViewSet(ModelViewSet):
    queryset = MeetingSubject.objects.all()
    serializer_class = MeetingSubjectSerializer


class ParticipantViewSet(ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer
