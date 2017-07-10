from meeting_manager.models import Meeting 
from rest_framework import serializers

class MeetingListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Meeting
        fields = ('id', 'meeting_category', 'entity', 'requested_meetdate', 'participants')