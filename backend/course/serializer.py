from rest_framework import serializers
from .models import *
from users.serializer import LecturerSerialiser

class CourseSerialiser(serializers.ModelSerializer):
    class Meta:   
        model = Course
        fields = '__all__'
