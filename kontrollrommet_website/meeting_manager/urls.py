
# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from views import index, MeetingViewSet, EntityViewSet

# Set up routers
router = routers.DefaultRouter()
router.register(r'meetings', MeetingViewSet, 'meetings')
router.register(r'entities', EntityViewSet, 'entities')

#Routed urlpatterns
urlpatterns = router.urls