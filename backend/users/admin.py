from .models import *
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .forms import UserCreationForm, UserChangeForm


class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm
    model = User

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('email', 'first_name', 'is_active','is_staff', 'is_superuser', 'is_student', 'is_lecturer',)
    list_filter = ('is_superuser','is_lecturer','is_student',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'gender',)}),
        ('Permissions', {'fields': ('is_superuser', 'is_active', 'is_staff', 'is_student', 'is_lecturer')}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'gender', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    
    filter_horizontal = ()

class StudentAdmin(admin.ModelAdmin):
    model = Student
    list_display = ('user', 'birthDay', 'nationality')
    list_filter = ('user', 'nationality')
    # search_fields = ('user',)

class LecturerAdmin(admin.ModelAdmin):
    model = Lecturer
    list_display = ('user', 'birthDay', 'nationality')
    list_filter = ('user', 'nationality')
    # search_fields = ('registration',)





admin.site.register(User, UserAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(Lecturer, LecturerAdmin)