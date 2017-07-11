
# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from views import index, MeetingViewSet, MeetingList

# Set up routers
router = routers.DefaultRouter()
router.register(r'meetings', MeetingViewSet, 'meetings')
#router.register(r'meetinglist', MeetingList.as_view(), 'meetinglist')

#Routed urlpatterns
urlpatterns = router.urls + [url(r'^meetinglist/', MeetingList.as_view())]