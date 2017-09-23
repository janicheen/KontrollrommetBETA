# REST framework dependencies
from rest_framework.serializers import ModelSerializer
# Models
from meeting_manager.models import MeetingCategory, SubjectToEntityRelationCategory
from meeting_manager.models import Meeting, Subject 
from meeting_manager.models import MeetingSubject, Participant, SubjectToEntityRelation

class MeetingCategorySerializer(ModelSerializer):

    class Meta:
        model = MeetingCategory
        depth = 0
        fields = '__all__'

class SubjectToEntityRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = SubjectToEntityRelationCategory
        depth = 0
        fields = '__all__'

class MeetingSerializer(ModelSerializer):

    class Meta:
        model = Meeting
        depth = 0
        fields = '__all__'

class SubjectSerializer(ModelSerializer):

    class Meta:
        model = Subject
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


class SubjectToEntityRelationSerializer(ModelSerializer):

    class Meta:
        model = SubjectToEntityRelation
        depth = 0
        fields = '__all__'
