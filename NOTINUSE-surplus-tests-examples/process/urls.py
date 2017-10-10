# Django dependencies
from django.conf.urls import url
# Rest Framework dependencies
from rest_framework.routers import DefaultRouter
# Views
from process import views

router = DefaultRouter()
# Categories
router.register(r'plancategory', views.PlanCategoryViewSet)
router.register(r'actioncategory', views.ActionCategoryViewSet)
router.register(r'resultcategory', views.ResultCategoryViewSet)
router.register(r'plantoactionrelationcategory', views.PlanToActionRelationCategoryViewSet)
router.register(r'actiontoresultrelationcategory', views.ActionToResultRelationCategoryViewSet)
router.register(r'resulttoplanrelationcategory', views.ResultToPlanRelationCategoryViewSet)
# Core models
router.register(r'plan', views.PlanViewSet)
router.register(r'action', views.ActionViewSet)
router.register(r'result', views.ResultViewSet)
# Relational models
router.register(r'plantoactionrelation', views.PlanToActionRelationViewSet)
router.register(r'actiontoresultrelation', views.ActionToResultRelationViewSet)
router.register(r'resulttoplanrelation', views.ResultToPlanRelationViewSet)

urlpatterns = router.urls
