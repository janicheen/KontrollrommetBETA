from django.conf.urls import url, include
from rest_framework import routers
 
import api.views
 
router = routers.DefaultRouter()
router.register(r'accounts', api.views.UserView, 'list')
 
urlpatterns = [
    url(r'^api/', include(router.urls)),
]
