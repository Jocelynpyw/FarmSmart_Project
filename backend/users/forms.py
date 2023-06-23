from django.contrib.auth import forms, get_user_model


class UserCreationForm(forms.UserCreationForm):

    model = get_user_model()
    fields =  ('email', 'first_name', 'last_name', 'is_active', 'is_superuser', 'is_staff','password')

class UserChangeForm(forms.UserChangeForm):
    model = get_user_model()
    fields = ('email', 'first_name', 'last_name', 'is_active', 'is_superuser', 'is_staff', 'password')