from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ['mobile']


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password', 'email', 'profile']

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        password=validated_data.pop('password')
        user.set_password(password)
        user.save()
        profile_data = validated_data.pop('profile')
        profile = models.Profile.objects.filter(user=user).update(mobile=profile_data['mobile'])
        return user
