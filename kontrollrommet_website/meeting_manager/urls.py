from django.conf.urls import url, include
from rest_framework import routers

from views import MeetingList

router = routers.DefaultRouter()
router.register(r'meetings', MeetingList.as_view({'get': 'list'}), 'meetinglist')

urlpatterns = [
    url(r'^meet/', include(router.urls)),
]