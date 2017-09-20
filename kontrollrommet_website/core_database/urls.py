from rest_framework.routers import DefaultRouter
from core_database import views


router = DefaultRouter()

router.register(r'entitycategory', views.EntityCategoryViewSet)
router.register(r'persontoentityrelationcategory', views.PersonToEntityRelationCategoryViewSet)
router.register(r'entitytopropertyrelationcategory', views.EntityToPropertyRelationCategoryViewSet)
router.register(r'person', views.PersonViewSet)
router.register(r'entity', views.EntityViewSet)
router.register(r'property', views.PropertyViewSet)
router.register(r'persontoentityrelation', views.PersonToEntityRelationViewSet)
router.register(r'entitytopropertyrelation', views.EntityToPropertyRelationViewSet)

urlpatterns = router.urls
