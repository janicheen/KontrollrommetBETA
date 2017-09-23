# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Django dependencies
from django.conf.urls import url
# REST framework dependencies
from rest_framework import routers
# Views
from client_views import views

# Set up router for viewset
router = routers.DefaultRouter()

router.register(r'meetingcategories', views.MeetingCategoriesViewSet, 'meetingcategories')
router.register(r'meetings', views.MeetingViewSet, 'meetings')
router.register(r'participants', views.ParticipantViewSet, 'participants')
router.register(r'meetingsubjects', views.MeetingSubjectViewSet, 'meetingsubjects')
### Viewsets with query params
router.register(r'subjectsbyentity', views.SubjectsByEntityViewSet, 'subjectsbyentity')

### Generic views 
genericviewsurl = [
    url(r'^currentuser', views.CurrentUser.as_view(), name='currentuser'),
    url(r'^meetingsbyuser', views.MeetingsByUserView.as_view(), name='meetingsbyuser'),
    url(r'^entitiesbyuser', views.EntitiesByUserView.as_view(), name='entitiesbyuser'),
    url(r'personsbyentity', views.PersonsByEntityView.as_view, name='personsbyentity'),
]

# Combines viewsets and generic views in Final Url pattern
urlpatterns = router.urls + genericviewsurl
