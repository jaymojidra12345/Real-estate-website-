# from django.urls import path
# from .views import ContactCreateView

# urlpatterns = [
#     path("",ContactCreateView.as_view()),
# ]

# contacts/urls.py
from django.urls import path
from .views import ContactListView

urlpatterns = [
    path('api/contacts/', ContactListView.as_view(), name='contact-list'),
]
