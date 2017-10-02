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

### Generic views 
genericviewsurl = [
    # current user views
    url(r'^createuser', views.CreateUser.as_view(), name='createuser'),
    url(r'^currentuser', views.CurrentUser.as_view(), name='currentuser'),
    url(r'^meetingparticipantbyuser', views.MeetingParticipantByUserView.as_view(), name='meetingparticipantbyuser'),
    url(r'^entitiesbyuser', views.EntitiesByUserView.as_view(), name='entitiesbyuser'),
    url(r'^persontoentityrelationbyuser', views.PersonToEntityRelationByUserView.as_view(), name='persontoentityrelationbyuser'),
    # query parameter views
    url(r'personsbyentity', views.PersonsByEntityView.as_view(), name='personsbyentity'),
]

# Combines viewsets and generic views in Final Url pattern
urlpatterns = router.urls + genericviewsurl
