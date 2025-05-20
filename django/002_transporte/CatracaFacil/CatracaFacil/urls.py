from django.urls import path, include
from django.contrib import admin
from django.urls import path

urlpatterns = [
   path('', include('catraca_facil.urls')),
   path('admin/', admin.site.urls),
   path('api-auth/', include('rest_framework.urls')),
]