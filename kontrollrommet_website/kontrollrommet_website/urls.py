"""kontrollrommet_website URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/

Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')

Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')

Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin

from rest_framework_jwt.views import obtain_jwt_token


#Url patterns
urlpatterns = [
	# Collected set of views meant for client frontend
    url(r'^', include('client_views.urls')),
    # Colleced set of views from process_control
    url(r'^process_control/', include('process_control.urls')),
	# the standard django admin API
    url(r'^admin/', admin.site.urls),
    #JWT token authentication view
    url(r'^api-token-auth/', obtain_jwt_token),
]
