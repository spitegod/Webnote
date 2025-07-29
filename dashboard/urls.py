from django.urls import path, include
from . import views
from .views import dashboard_view

urlpatterns = [
    path('', views.index),
    path('home/', dashboard_view, name='dashboard'),
    path('auth/', views.auth_view, name='auth'),
]
