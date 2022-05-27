import imp
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import generics
from .models import Itinerary
from .serializers import ItinerarySerializer
# Create your views here.

class ItineraryView(generics.RetrieveAPIView):
    queryset = Itinerary.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = ItinerarySerializer(queryset, many = True)
        return Response(serializer.data)

    def createTrip(self, request, *args, **kwargs):
        if request.method == 'POST':
            tripname = request.POST.get('tripname')
            startdate = request.POST.get('startdate')
            enddate = request.POST.get('enddate')
            location = request.POST.get('location')
            vehicle = request.POST.get('vehicle')
            # TODO get data
            
            pass