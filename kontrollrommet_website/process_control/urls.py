from rest_framework.routers import DefaultRouter
from process_control import views

router = DefaultRouter()
router.register(r'case', views.CaseViewSet)

urlpatterns = router.urls
