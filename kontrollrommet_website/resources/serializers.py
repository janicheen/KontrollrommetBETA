# Django Dependencies
from rest_framework.serializers import ModelSerializer
# Category models
from resources.models import PersonCategory, EntityCategory, PropertyCategory 
from resources.models import PersonToEntityRelationCategory, EntityToPropertyRelationCategory, PropertyToPersonRelationCategory 
# Core Models
from resources.models import Person, Entity, Property
# Relational Models
from resources.models import PersonToEntityRelation, EntityToPropertyRelation, PropertyToPersonRelation

### Category Models ###

# Person Category
class PersonCategorySerializer(ModelSerializer):

    class Meta:
        model = PersonCategory
        depth = 0
        fields = '__all__'


# Entity Category
class EntityCategorySerializer(ModelSerializer):

    class Meta:
        model = EntityCategory
        depth = 0
        fields = '__all__'

# Property Category
class PropertyCategorySerializer(ModelSerializer):

    class Meta:
        model = PropertyCategory
        depth = 0
        fields = '__all__'

# Person to Entity Relation Category
class PersonToEntityRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PersonToEntityRelationCategory
        depth = 0
        fields = '__all__'

#  Entity To Property Relation Category
class EntityToPropertyRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = EntityToPropertyRelationCategory
        depth = 0
        fields = '__all__'

#  Property to Person Relation Category
class PropertyToPersonRelationCategorySerializer(ModelSerializer):

    class Meta:
        model = PropertyToPersonRelationCategory
        depth = 0
        fields = '__all__'

### Pure data model serializers

#  Person
class PersonSerializer(ModelSerializer):

    class Meta:
        model = Person
        depth = 0
        fields = '__all__'

# Entity
class EntitySerializer(ModelSerializer):

    class Meta:
        model = Entity
        depth = 0
        fields = '__all__'

# Property
class PropertySerializer(ModelSerializer):

    class Meta:
        model = Property
        depth = 0
        fields = '__all__'


### Relational models

# Person to Entity
class PersonToEntityRelationSerializer(ModelSerializer):

    class Meta:
        model = PersonToEntityRelation
        depth = 1
        fields = '__all__'

# Entity to Property
class EntityToPropertyRelationSerializer(ModelSerializer):

    class Meta:
        model = EntityToPropertyRelation
        depth = 1
        fields = '__all__'

# Property To Person
class PropertyToPersonRelationSerializer(ModelSerializer):

    class Meta:
        model = PropertyToPersonRelation
        depth = 1
        fields = '__all__'