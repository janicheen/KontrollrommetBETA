from django.contrib.auth.models import User
from rest_framework import serializers
 
 
class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='person.first_name')
    last_name = serializers.CharField(source='person.last_name')

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        write_only_fields = ('password',)
        read_only_fields = ('is_staff', 'is_superuser', 'is_active', 'date_joined',)
 
    # NB Uncertain code here, have to check out
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
