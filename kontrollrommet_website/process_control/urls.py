# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from process_control.views import SubjectsByEntityViewSet

# Set up routers
router = routers.DefaultRouter()
# General viwesets
#
# Viewsets with query params
router.register(r'subjectsbyentity', SubjectsByEntityViewSet, 'subjectsbyentity')
# generic views urls
genericviewsurl = [
    #
    ]

#Final Url pattern combines viewsets and generic views
urlpatterns = genericviewsurl + router.urls
