
# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Views
from .views import PersonViewSet, EntityViewSet
from .views import EntitiesByUserView, PersonsByEntityViewSet

# Set up router for viewsets
router = routers.DefaultRouter()
# core database viewsets
router.register(r'persons', PersonViewSet, 'persons')
router.register(r'entities', EntityViewSet, 'entities')
# Spesific viewsets
# Gets persons by entity, using ?id='id.entity'
router.register(r'personsbyentity', PersonsByEntityViewSet, 'personsbyentity')

# generic views urls
genericviewsurl = [
    url(r'^entitiesbyuser', EntitiesByUserView.as_view(), name='entitiesbyuser'),
    #url(r'^personsbyentity/(?P<pk>[0-9]+)/$', PersonsByEntityView.as_view(), name='personsbyentity'),   
]

#Final Url pattern combines viewsets and generic views
urlpatterns = genericviewsurl + router.urls
# + genericviewsurl