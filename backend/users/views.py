from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse, Http404, HttpResponse
from rest_framework import status,permissions
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import login, logout
from .models import *
from .serializer import *
from .permission import *



class EtudiantView(APIView):

    serialiser_class = StudentSerialiser
    permission_classes = (IsGroupAdminAuthenticated,)
    # get a Etudiant
    def get_Etudiant(self, id):
        try: 
            etudiant = Student.objects.get(id=id)
            return etudiant
        except:
            raise Http404

    
    # get list of Etudiant
    def get(self, request, id=None):
        if id: 
            etudiant = self.get_Etudiant(id)
            serializer = self.serialiser_class(etudiant)
        else:
            etudiant = Student.objects.all()
            serializer = self.serialiser_class(etudiant, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)



# Create class view Etudiant.
class EtudiantRegisterView(APIView):
    permission_classes = (permissions.AllowAny,)
    serialiser_class = StudentSerialiser
        #  create new Etudiant or register Etudiant
    def post(self, request, format=None):
        serialiser = self.serialiser_class(data=request.data)

        if serialiser.is_valid():
            serialiser.save()    
                
            return Response(serialiser.data, status=status.HTTP_201_CREATED)

        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)

class EtudiantDeleteView(APIView):
    permission_classes = (IsAdminAuthenticated,)
    serialiser_class = StudentSerialiser
    
    # delete Etudiant
    def delete(self, request, id=None):
        # get Etudiant to delete
        etudiant = Student.objects.get(id=id)
        serializer = self.serialiser_class(etudiant)
        etudiant.delete()

        return Response(serializer.errors, status=status.HTTP_204_NOT_CONTENT)

class EtudiantUpdateView(APIView):
    permission_classes = (IsAdminAuthenticated,)
    serialiser_class = StudentSerialiser
        #  create new Etudiant or register Etudiant
    
        # update Etudiant
    def put(self, request, id=None):
        # get Etudiant to update data
        etudiant = Student.objects.get(id=id)
        serializer = self.serialiser_class(instance=etudiant, data=request.data, partial=True)

        # check if data is valid
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     

# crud of object lecturer
class LecturerView(APIView):
    serialiser_class = LecturerSerialiser
    permission_classes = (IsGroupAdminAuthenticated,)
    # get a lecturer
    def get_Lecturer(self, id):
        try: 
            lecturer = Lecturer.objects.get(id=id)
            return lecturer
        except:
            raise Http404

    
    # get list of Etudiant
    def get(self, request, id=None):
        if id: 
            lecturer = self.get_Lecturer(id)
            serializer = self.serialiser_class(lecturer)
        else:
            lecturers = Lecturer.objects.all()
            serializer = self.serialiser_class(lecturers, many=True)

        return Response(serializer.data)
           


class LecturerRegisterView(APIView):
    serialiser_class = LecturerSerialiser
    permission_classes = (IsAdminAuthenticated,)
     #  create new Lecturer or register lecturer
    def post(self, request, format=None):
        serialiser = self.serialiser_class(data=request.data)

        if serialiser.is_valid():
            serialiser.save()    
                
            return Response(serialiser.data, status=status.HTTP_201_CREATED)

        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)

class LecturerDelete(APIView):
    permission_classes = (IsAdminAuthenticated,)
    serialiser_class = LecturerSerialiser
    def delete(self, request, id=None):
        # get lecturer to delete
        lecturer = Lecturer.objects.get(id=id)
        serializer = self.serialiser_class(lecturer)
        lecturer.delete()

        return Response(serializer.errors, status=status.HTTP_204_NOT_CONTENT)


class LecturerUpdateView(APIView):
    permission_classes = (IsAdminAuthenticated,)
    serialiser_class = LecturerSerialiser
    def put(self, request, id=None):
        # get lecturer to update data
        lecturer = Lecturer.objects.get(id=id)
        serializer = self.serialiser_class(instance=lecturer, data=request.data, partial=True)

        # check if data is valid
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
    create view to login user
"""
class UserLoginView(APIView):
    permission_classes = (permissions.AllowAny, )
    authentication_classes = (SessionAuthentication,)

    # metho post to check user authenticate
    def post(self, request):
        data = request.data
        serializer = UserLoginSerialiser(data=data)

        if serializer.is_valid(raise_exception=True):
            
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
    



"""
    create view to logout user
"""
class UserLogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    