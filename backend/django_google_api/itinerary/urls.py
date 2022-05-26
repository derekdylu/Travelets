from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
	#.as_view only required when using class-based view
	path('itinerary/', views.ItineraryView.as_view(), name="Itinerary_View"),
]