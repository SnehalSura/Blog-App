from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet

# Create a router and register the BlogViewSet
router = DefaultRouter()
router.register('blogs', BlogViewSet, basename='blog')

urlpatterns = [
    path('', include(router.urls)),  # Include all routes from the router
]
