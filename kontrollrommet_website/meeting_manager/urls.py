# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from meeting_manager.views import MeetingViewSet, MeetingCategoriesView

# Set up routers
router = routers.DefaultRouter()

# General Meeting model Viweset
router.register(r'meetings', MeetingViewSet, 'meetings')
# Viewsets with query params
#
# generic views urls
genericviewsurl = [
    url(r'^meetingcategories', MeetingCategoriesView.as_view(), name='meetingcategories'),
]

#Final Url pattern combines viewsets and generic views
urlpatterns = genericviewsurl + router.urls
