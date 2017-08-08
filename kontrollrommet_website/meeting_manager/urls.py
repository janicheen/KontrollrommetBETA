# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from meeting_manager.views import index, MeetingViewSet

# Set up routers
router = routers.DefaultRouter()
router.register(r'meetings', MeetingViewSet, 'meetings')

#Routed urlpatterns
urlpatterns = router.urls