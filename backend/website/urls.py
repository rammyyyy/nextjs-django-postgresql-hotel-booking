from django.urls import path
from .views import UserCreateView  # หรือชื่อ view ของคุณ

urlpatterns = [
    path('signup', UserCreateView.as_view(), name='signup'),  # ใส่เส้นทางนี้
]
