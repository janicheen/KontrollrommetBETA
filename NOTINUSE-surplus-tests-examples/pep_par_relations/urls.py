from rest_framework.routers import DefaultRouter
from pep_par_relations import views


router = DefaultRouter()

router.register(r'persontoactionrelationcategory', views.PersonToActionRelationCategoryViewSet)
router.register(r'actiontoentityrelationcategory', views.ActionToEntityRelationCategoryViewSet)
router.register(r'entitytoplanrelationcategory', views.EntityToPlanRelationCategoryViewSet)
router.register(r'plantopropertyrelationcategory', views.PlanToPropertyRelationCategoryViewSet)
router.register(r'propertytoresultrelationcategory', views.PropertyToResultRelationCategoryViewSet)
router.register(r'resulttopersonrelationcategory', views.ResultToPersonRelationCategoryViewSet)
router.register(r'plantopersonrelationcategory', views.PlanToPersonRelationCategoryViewSet)
router.register(r'actiontopropertyrelationcategory', views.ActionToPropertyRelationCategoryViewSet)
router.register(r'resulttoentityrelationcategory', views.ResultToEntityRelationCategoryViewSet)
router.register(r'persontoactionrelation', views.PersonToActionRelationViewSet)
router.register(r'actiontoentityrelation', views.ActionToEntityRelationViewSet)
router.register(r'entitytoplanrelation', views.EntityToPlanRelationViewSet)
router.register(r'plantopropertyrelation', views.PlanToPropertyRelationViewSet)
router.register(r'propertytoresultrelation', views.PropertyToResultRelationViewSet)
router.register(r'resulttopersonrelation', views.ResultToPersonRelationViewSet)
router.register(r'plantopersonrelation', views.PlanToPersonRelationViewSet)
router.register(r'actiontopropertyrelation', views.ActionToPropertyRelationViewSet)
router.register(r'resulttoentityrelation', views.ResultToEntityRelationViewSet)

urlpatterns = router.urls
