from django.db import models
from users.models import Lecturer

# Create your models here.


class Course(models.Model):
    name = models.CharField(max_length=250)
    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Exam(models.Model):
    pass