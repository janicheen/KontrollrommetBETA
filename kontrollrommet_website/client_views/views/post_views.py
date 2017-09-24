# REST Framework dependencies
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

# Models
from resources.models import Person, Entity, Property
from meeting_manager.models import MeetingParticipant, MeetingSubject
# Serializers
from meeting_manager.serializers import MeetingSerializer, MeetingParticipantSerializer, MeetingSubjectSerializer 
from client_views.serializers import MeetingSerializerPOST, MeetingParticipantSerializerPOST, MeetingSubjectSerializerPOST

# MeetingParticipant Viewset
class MeetingParticipantViewSet(viewsets.ModelViewSet):
    serializer_class = MeetingParticipantSerializer
    queryset = MeetingParticipant.objects.all()

    # Redefines create so it can receive a list of object entries
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # sets different serializers for read and write
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return MeetingParticipantSerializerPOST
        return MeetingParticipantSerializer


# Meetingsubject Viewset
class MeetingSubjectViewSet(viewsets.ModelViewSet):
    serializer_class = MeetingSubjectSerializer
    queryset = MeetingSubject.objects.all()
    
    # Redefines create so it can receive a list of object entries
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    # sets different serializers for read and write
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return MeetingSubjectSerializerPOST
        return MeetingSubjectSerializer



