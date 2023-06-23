from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import *
from users.permission import *
from rest_framework.response import Response
from django.http.response import JsonResponse, Http404, HttpResponse
from rest_framework import status,permissions


# Create your views here.
class CourseRegisterView(APIView):
    serialiser_class = CourseSerialiser

    permission_classes = (IsLecturerAuthenticated,)
        #  create new Course or register Course
    def post(self, request, format=None):
        serialiser = self.serialiser_class(data=request.data)

        if serialiser.is_valid():
            serialiser.save()    
                
            return Response(serialiser.data, status=status.HTTP_201_CREATED)

        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)


# Create your views here.
class CourseView(APIView):

    serialiser_class = CourseSerialiser
    permission_classes = (permissions.AllowAny,)
    # get a Course
    def get_Course(self, id):
        try: 
            course = Course.objects.get(id=id)
            return course
        except:
            raise Http404

    
    # get list of Course
    def get(self, request, id=None):
        if id: 
            course = self.get_Course(id)
            serializer = self.serialiser_class(course)
        else:
            course = Course.objects.all()
            serializer = self.serialiser_class(course, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class CourseViewRegister(APIView):
    serialiser_class = CourseSerialiser

    permission_classes = (IsGroupAdminAuthenticated,)
        #  create new Course or register Course
    def post(self, request, format=None):
        serialiser = self.serialiser_class(data=request.data)

        if serialiser.is_valid():
            serialiser.save()    
                
            return Response(serialiser.data, status=status.HTTP_201_CREATED)

        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseDeleteView(APIView):
    permission_classes = (IsAdminAuthenticated,)
    serialiser_class = CourseSerialiser
        #  create new Course or register Course
    
    # delete Course
    def delete(self, request, id=None):
        # get Course to delete
        course = Course.objects.get(registration=id)
        serializer = self.serialiser_class(course)
        course.delete()

        return Response(serializer.errors, status=status.HTTP_204_NOT_CONTENT)
    

class CourseUpdateView(APIView):
    permission_classes = (IsAdminAuthenticated,)
    serialiser_class = CourseSerialiser
        #  create new Course or register Course
    
        # update Course
    def put(self, request, id=None):
        # get Course to update data
        course = Course.objects.get(registration=id)
        serializer = self.serialiser_class(instance=course, data=request.data, partial=True)

        # check if data is valid
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     