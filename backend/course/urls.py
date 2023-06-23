from django.urls import path
from .views import *

urlpatterns = [
    path("", CourseView.as_view()),
    path("<str:id>/details", CourseView.as_view()),
    path("register/course", CourseRegisterView.as_view()),
    path("course/<str:id>/delete", CourseDeleteView.as_view()),
    path("course/<str:id>/update", CourseUpdateView.as_view()),
]