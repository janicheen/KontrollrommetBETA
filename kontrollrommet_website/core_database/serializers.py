#Core models
from core_database.models import Entity, Person, PersonToEntityRelation

# Rest Framework dependencies
from rest_framework import serializers

class EntitiesByPersonSerializer(serializers.ModelSerializer):
	entity_id = serializers.ReadOnlyField(source='entity.id')
	entity_name = serializers.ReadOnlyField(source='entity.name')
	function = serializers.StringRelatedField()
	class Meta:
		model = PersonToEntityRelation
		fields = ('entity_id', 'entity_name', 'function')

class PersonsByEntitySerializer(serializers.ModelSerializer):
	person_id = serializers.ReadOnlyField(source='person.id')
	person_firstname = serializers.ReadOnlyField(source='person.first_name')
	person_lastname = serializers.ReadOnlyField(source='person.last_name')
	function = serializers.StringRelatedField()
	class Meta:
		model = PersonToEntityRelation
		fields = ('person_id', 'person_firstname', 'person_lastname', 'function')

class PersonSerializer(serializers.ModelSerializer):
# Probably not good to include this in person data
#	entities = PersonToEntityRelationSerializer(source='persontoentityrelation_set', many=True)
	class Meta:
		model = Person
		fields = ('id', 'first_name', 'last_name')

class EntitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Entity
		fields = ('id', 'name', 'category')

