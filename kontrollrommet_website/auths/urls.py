# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from views import UserViewSet, CurrentUser

# Set up routers
router = routers.DefaultRouter()
router.register(r'users', UserViewSet, 'users')

#router.register(r'currentuser', CurrentUser, 'currentuser')

#Routed urlpatterns
urlpatterns = router.urls + [
    url(r'^currentuser', CurrentUser.as_view()),
]
#urlpatterns = router.urls