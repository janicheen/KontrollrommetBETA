from rest_framework.viewsets import ModelViewSet
# Serializers
from meeting_manager.serializers import MeetingCategorySerializer, SubjectToEntityRelationCategorySerializer
from meeting_manager.serializers import MeetingSerializer, SubjectSerializer
from meeting_manager.serializers import MeetingSubjectSerializer, ParticipantSerializer, SubjectToEntityRelationSerializer
# Models
from meeting_manager.models import MeetingCategory, SubjectCategory, SubjectToEntityRelationCategory
from meeting_manager.models import Meeting, Subject
from meeting_manager.models import MeetingSubject, Participant, SubjectToEntityRelation


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

class SubjectToEntityRelationCategoryViewSet(ModelViewSet):
    queryset = SubjectToEntityRelationCategory.objects.all()
    serializer_class = SubjectToEntityRelationCategorySerializer

class SubjectViewSet(ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class SubjectToEntityRelationViewSet(ModelViewSet):
    queryset = SubjectToEntityRelation.objects.all()
    serializer_class = SubjectToEntityRelationSerializer
