# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from meeting_manager.views import index, MeetingViewSet, SubjectsByEntityViewSet, MeetingCategoriesView

# Set up routers
router = routers.DefaultRouter()
# General viwesets
router.register(r'meetings', MeetingViewSet, 'meetings')
# Viewsets with query params
router.register(r'subjectsbyentity', SubjectsByEntityViewSet, 'subjectsbyentity')

# generic views urls
genericviewsurl = [
    url(r'^meetingcategories', MeetingCategoriesView.as_view(), name='meetingcategories'),
]

#Final Url pattern combines viewsets and generic views
urlpatterns = genericviewsurl + router.urls
