from django.urls import path
from .views import ListingsView, ListingView, SearchView

urlpatterns = [
    path("", ListingsView.as_view(), name="listings"),
    path("search/", SearchView.as_view(), name="search"),
    path("<slug:slug>/", ListingView.as_view(), name="listing_detail"),
]

# urlpatterns = [
#     path("",ListingsView.as_view(), name="listings"),
#     path("search/",SearchView.as_view()),
#     path("<slug>",ListingView.as_view())
# ]
