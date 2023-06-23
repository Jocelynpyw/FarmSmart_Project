from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate, get_user_model
from django.http.response import Http404
from django.contrib.auth.hashers import make_password

# serialize model admin
class UserSerialiser(serializers.ModelSerializer):
    class Meta:   
        model = User
        fields = '__all__'
# serialize model Student
class StudentSerialiser(serializers.ModelSerializer):
    user = UserSerialiser()
    class Meta:   
        model = Student
        fields = '__all__'

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        make_password(user_data['password'])
        print(user_data)
        user = User.objects.create(**user_data, is_student=True)
        user.set_password(user_data['password'])
        user.save()
        student = Student.objects.create(user=user, **validated_data)

        return student


    
# serialize model lecturer
class LecturerSerialiser(serializers.ModelSerializer):
    user = UserSerialiser()
    class Meta:   
        model = Lecturer
        fields = '__all__'

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data, is_lecturer=True)
        user.set_password(user_data['password'])
        user.save()
        lecturer = Lecturer.objects.create(user=user, **validated_data)

        return lecturer
    

# user login serializer
class UserLoginSerialiser(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, clean_data):

        user = authenticate(username=clean_data['email'], password=clean_data['password'])

        if not user:
            raise Http404

        return user