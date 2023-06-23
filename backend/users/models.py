from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin



class MyUserManager(BaseUserManager):
    def create_user(self, email, first_name, password, **extra_fields):
        """
        Creates and saves a User with the given email, registration and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        if not password:
            raise ValueError('Users password is required')

        
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, password=None):

        user = self.create_user(
            email,
            first_name,
            password,
        )
        user.is_superuser = True
        user.is_staff = True
        user.save()
        print(user.email)
        return user


class User(AbstractBaseUser, PermissionsMixin):

    Gender = [
        ('Female', 'Female'),
        ('Male', 'Male')
    ]

    class Meta:
        verbose_name = "Admin"
    email = models.EmailField("Email adress", max_length=200, unique=True)
    gender = models.CharField(choices=Gender, max_length=10, null=True)
    first_name = models.CharField(max_length=10, null=True)
    last_name = models.CharField(max_length=10, null=True)
    photoProfil = models.ImageField(upload_to="images/pp", null=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    is_lecturer = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name',]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    # @property
    # def is_staff(self):
    #     "Is the user a member of staff?"
    #     # Simplest possible answer: All admins are staff
    #     return self.is_admin


# {
#     "birthDay": "2023-5-22",
#     "registration": "19Y2596",
#     "adress":"yaoundé",
#     "nationality":"cameroon",
#     "phone":"696114119",
    # "user": {
    #     "email":"lecturere1@gmail.com",
    #     "gender": "Female",
    #     "first_name":"jean",
    #     "last_name": "yvelos",
    #     "password" : "2002lecturer@"
    # }
# }


class Lecturer(models.Model):
    registration = models.CharField(primary_key=True, max_length=7)
    adress = models.CharField(max_length=200)
    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    birthDay = models.DateField('Birth Day', max_length=60, null=True)
    nationality = models.CharField(max_length=60, null=True)
    phone = models.IntegerField()

    def __str__(self):
        return self.user.email

    """_summary_
        data = [
{
    "birthDay": "2023-5-22",
    "nationality":"cameroon",
    "phone":"696114119",
    "user": {
        "email":"jeanpetit@gmail.com",
        "gender": "Female",
        "first_name":"jean",
        "last_name": "yvelos",
        "password" : "xdk@856dkfls%",
        "re_password" : "1234jean@"
    }
}
        ]
    
    """


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    birthDay = models.DateField('Birth Day', max_length=60, null=True)
    nationality = models.CharField(max_length=60, null=True)
    phone = models.IntegerField(null=True)


    def __str__(self):
        return self.user.email