from django.conf.urls import url, include
from rest_framework import routers
 
import api.views
 
router = routers.DefaultRouter()
router.register(r'accounts', api.views.UserView, 'list')
router.register(r'auth', api.views.AuthView.as_view(), 'authenticate')
 
urlpatterns = [
	url(r'^api/auth/$', api.views.AuthView.as_view(), name='authenticate'),
    url(r'^api/', include(router.urls)),
]
