# Django dependencies
from django.conf.urls import url
# Rest Framework dependencies
from rest_framework.routers import DefaultRouter
# Views
from resources import views

router = DefaultRouter()
# Categories
router.register(r'personcategory', views.PersonCategoryViewSet)
router.register(r'entitycategory', views.EntityCategoryViewSet)
router.register(r'propertycategory', views.PropertyCategoryViewSet)
router.register(r'persontoentityrelationcategory', views.PersonToEntityRelationCategoryViewSet)
router.register(r'entitytopropertyrelationcategory', views.EntityToPropertyRelationCategoryViewSet)
router.register(r'propertytopersonrelationcategory', views.PropertyToPersonRelationCategoryViewSet)
# Core models
router.register(r'person', views.PersonViewSet)
router.register(r'entity', views.EntityViewSet)
router.register(r'property', views.PropertyViewSet)
# Relational models
router.register(r'persontoentityrelation', views.PersonToEntityRelationViewSet)
router.register(r'entitytopropertyrelation', views.EntityToPropertyRelationViewSet)
router.register(r'propertytopersonrelation', views.PropertyToPersonRelationViewSet)

urlpatterns = router.urls
