from django.urls import path
from django.contrib.auth.views import LogoutView
from . import views

urlpatterns = [
    path('', views.chat_home, name='chat_home'),
    path('login/', views.login_view, name='login'),
    path('logout/', LogoutView.as_view(template_name='chat/login.html', next_page='login'), name='logout'),
    path('register/', views.register_view, name='register'),
    path('chat/<int:user_id>/', views.chat_room, name='chat_room'),
] 