from django.urls import path
from .views import *

urlpatterns = [
    path("login", UserLoginView.as_view()),
    path("logout", UserLogoutView.as_view()),
    path("student/", EtudiantView.as_view(), name="list_student"),
    path("student/<str:id>", EtudiantView.as_view(), name="details_student"),
    path("register/student/", EtudiantRegisterView.as_view(), name="register_student"),
    path("student/<str:id>/delete", EtudiantDeleteView.as_view()),
    path("update/<str:id>/student", EtudiantUpdateView.as_view()),
    # lecturer route
    path("lecturer/", LecturerView.as_view()),
    path("lecturer/<str:id>", LecturerView.as_view()),
    path("register/lecturer", LecturerRegisterView.as_view()),
    path("delete/<str:id>/lecturer", LecturerDelete.as_view()),
    path("update/<str:id>/lecturer", LecturerUpdateView.as_view()),
]