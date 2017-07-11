
# Django dependencies
from django.conf.urls import url, include

# REST framework dependencies
from rest_framework import routers

# Models and serializers

# Views
from views import index, MeetingViewSet

router = routers.DefaultRouter()
router.register(r'meetings', MeetingViewSet)

#urlpatterns = [
#    url(r'^meetings', index, name='meetingindex')
#]

#Adde Routed urlpatterns
urlpatterns = router.urls