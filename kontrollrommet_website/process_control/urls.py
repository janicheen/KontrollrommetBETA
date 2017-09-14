from rest_framework.routers import DefaultRouter
from process_control import views


router = DefaultRouter()

router.register(r'subjecttoentityrelationcategory', views.SubjectToEntityRelationCategoryViewSet)
router.register(r'case', views.CaseViewSet)
router.register(r'subject', views.SubjectViewSet)
router.register(r'subjecttoentityrelation', views.SubjectToEntityRelationViewSet)

urlpatterns = router.urls
