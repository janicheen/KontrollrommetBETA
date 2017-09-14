# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# Django dependencies
from django.conf.urls import url, include
# REST framework dependencies
from rest_framework import routers

# Category Views
from .views import MeetingCategoriesViewSet, EntityCategoryViewSet, PersonToEntityRelationCategoryViewSet
# User Views
from .views import UserViewSet, CurrentUser
# Core Data Views
from .views import PersonViewSet, EntityViewSet
# Core Data Relational Views
from .views import EntitiesByUserView, PersonsByEntityViewSet
from .views import MeetingsByUserView
# Meetings Views
from .views import MeetingViewSet, MeetingSubjectViewSet, ParticipantViewSet
from .views import SubjectsByEntityViewSet


# Set up router for viewset
router = routers.DefaultRouter()

### General Viewsets
# Entity Categories View
router.register(r'entitycategories', EntityCategoryViewSet, 'entitycategories')
# Meeting Categories View
router.register(r'meetingcategories', MeetingCategoriesViewSet, 'meetingcategories')
# Person to Entity Relation Categories View
router.register(r'persontoentityrelationcategories', PersonToEntityRelationCategoryViewSet, 'persontoentityrelationcategories')

# User
router.register(r'users', UserViewSet, 'users')
# Person
router.register(r'persons', PersonViewSet, 'persons')
# Entity
router.register(r'entities', EntityViewSet, 'entities')
# Meeting
router.register(r'meetings', MeetingViewSet, 'meetings')
# Participants
router.register(r'participants', ParticipantViewSet, 'participants')
# Meetingsubjects
router.register(r'meetingsubjects', MeetingSubjectViewSet, 'meetingsubjects')

### Viewsets with query params
# Persons by Entity, query param=Entity.pk'
router.register(r'personsbyentity', PersonsByEntityViewSet, 'personsbyentity')
# Subjects by Entity Viewset, query param=Entity.pk
router.register(r'subjectsbyentity', SubjectsByEntityViewSet, 'subjectsbyentity')


### Generic views 
genericviewsurl = [
    # current user
    url(r'^currentuser', CurrentUser.as_view()),
    # entities by user
    url(r'^entitiesbyuser', EntitiesByUserView.as_view(), name='entitiesbyuser'),
    # meetings by user
    url(r'^meetingsbyuser', MeetingsByUserView.as_view(), name='meetingsbyuser'),

]

# Combines viewsets and generic views in Final Url pattern
urlpatterns = router.urls + genericviewsurl
