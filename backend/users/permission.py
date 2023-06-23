from rest_framework.permissions import BasePermission
 
class IsAdminAuthenticated(BasePermission):
 
    def has_permission(self, request, view):
    # Ne donnons l’accès qu’aux utilisateurs administrateurs authentifiés
        print(request.user.is_authenticated)
        return bool(request.user and request.user.is_authenticated and request.user.is_superuser)

class IsStudentAuthenticated(BasePermission):
 
    def has_permission(self, request, view):
    # Ne donnons l’accès qu’aux utilisateurs administrateurs authentifiés
        print(request.user.is_authenticated)
        return bool(request.user and request.user.is_authenticated and request.user.is_student)

class IsLecturerAuthenticated(BasePermission):
 
    def has_permission(self, request, view):
    # Ne donnons l’accès qu’aux utilisateurs administrateurs authentifiés
        print(request.user.is_authenticated)
        return bool(request.user and request.user.is_authenticated and request.user.is_lecturer)

class IsGroupAdminAuthenticated(BasePermission):
    def has_permission(self, request, view):
    # Ne donnons l’accès qu’aux utilisateurs administrateurs authentifiés
        print(request.user.is_authenticated)
        return bool(request.user and request.user.is_authenticated and not(request.user.is_student) or request.user.is_lecturer or request.user.is_superuser)
