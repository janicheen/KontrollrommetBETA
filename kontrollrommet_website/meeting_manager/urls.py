from rest_framework.routers import DefaultRouter
from meeting_manager import views

router = DefaultRouter()
router.register(r'meetingcategory', views.MeetingCategoryViewSet)
router.register(r'meeting', views.MeetingViewSet)
router.register(r'meetingsubject', views.MeetingSubjectViewSet)
router.register(r'participant', views.MeetingParticipantViewSet)

urlpatterns = router.urls
