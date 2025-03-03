from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from . import models
from . import serializers

class UserCreateView(CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()
