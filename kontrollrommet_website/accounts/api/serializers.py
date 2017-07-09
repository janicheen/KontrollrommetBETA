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
 
    def restore_object(self, attrs, instance=None):
        # call set_password on user object. Without this
        # the password will be stored in plain text.
        user = super(UserSerializer, self).restore_object(attrs, instance)
        user.set_password(attrs['password'])
        return user
