from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('escola.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
