# Django dependencies
from django.conf.urls import url

# Wiews to route to URLs  
from views import index

# URL routing
urlpatterns = [
    url(r'^dashboard', index, name='index'),
]