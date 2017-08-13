# Rest Framework dependencies
from rest_framework import serializers

#Models
from process_control.models import SubjectToEntityRelation

class SubjectsByEntitySerializer(serializers.ModelSerializer):
	subject_id = serializers.ReadOnlyField(source='subject.id')
	headline = serializers.ReadOnlyField(source='subject.headline')
	description = serializers.ReadOnlyField(source='subject.description')
	class Meta:
		model = SubjectToEntityRelation
		fields = ('subject_id', 'headline', 'description', 'relation')
