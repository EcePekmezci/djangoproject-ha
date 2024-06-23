from django.urls import path
from . import views

urlpatterns = [
    path("ihas/", views.IhaListCreate.as_view(), name="iha-list"),
    path("ihas/delete/<int:pk>/", views.IhaDelete.as_view(), name="delete-iha"),
]