# REST Framework dependencies
from rest_framework.generics import ListAPIView

# Serializers
from resources.serializers import PersonSerializer, EntitySerializer, PropertySerializer
# Models 
from resources.models import Person, Entity, Property

### Views by Query parameter
class PersonsByEntityView(ListAPIView):
    serializer_class = PersonSerializer
    # makes a queryset with all persons matching the requested entity 
    def get_queryset(self):
        id = self.request.query_params.get('id', None)
        queryset = Person.objects.filter(persontoentityrelation__entity__id = id)
        return queryset
  
