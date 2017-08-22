# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from .views import UserViewSet, CurrentUser
from .views import PersonViewSet, EntityViewSet
from .views import EntitiesByUserView, PersonsByEntityViewSet
from .views import MeetingViewSet, MeetingCategoriesView
from .views import SubjectsByEntityViewSet


# Set up router for viewset
router = routers.DefaultRouter()

### General Viewsets
# User
router.register(r'users', UserViewSet, 'users')
# Person
router.register(r'persons', PersonViewSet, 'persons')
# Entity
router.register(r'entities', EntityViewSet, 'entities')
# Meeting
router.register(r'meetings', MeetingViewSet, 'meetings')

### Viewsets with query params
# Subjects-by-Entity Viewset, fetched through query param EntityID
router.register(r'subjectsbyentity', SubjectsByEntityViewSet, 'subjectsbyentity')
# Gets persons by entity, using ?id='id.entity'
router.register(r'personsbyentity', PersonsByEntityViewSet, 'personsbyentity')


### Generic views 
genericviewsurl = [
    # get current user
    url(r'^currentuser', CurrentUser.as_view()),
    # entities by user
    url(r'^entitiesbyuser', EntitiesByUserView.as_view(), name='entitiesbyuser'),
    # meeting categories
    url(r'^meetingcategories', MeetingCategoriesView.as_view(), name='meetingcategories'),

]

# Combines viewsets and generic views in Final Url pattern
urlpatterns = router.urls + genericviewsurl