from rest_framework.serializers import ModelSerializer
from meeting_manager.models import MeetingCategory, Meeting, MeetingSubject, Participant


class MeetingCategorySerializer(ModelSerializer):

    class Meta:
        model = MeetingCategory
        depth = 0
        fields = '__all__'


class MeetingSerializer(ModelSerializer):

    class Meta:
        model = Meeting
        depth = 0
        fields = '__all__'


class MeetingSubjectSerializer(ModelSerializer):

    class Meta:
        model = MeetingSubject
        depth = 0
        fields = '__all__'


class ParticipantSerializer(ModelSerializer):

    class Meta:
        model = Participant
        depth = 0
        fields = '__all__'
