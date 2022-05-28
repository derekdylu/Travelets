from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from .models import Itinerary
from .serializers import ItinerarySerializer
# Create your views here.

# class ItineraryView(generics.RetrieveAPIView):
#     queryset = Itinerary.objects.all()

#     def get(self, request, *args, **kwargs):
#         queryset = self.get_queryset()
#         serializer = ItinerarySerializer(queryset, many = True)
#         return Response(serializer.data)


class ItineraryViewSet(ModelViewSet):
    queryset = Itinerary.objects.all()
    serializer_class = ItinerarySerializer

    # def create(self, request, *args, **kwargs):
    #     if request.method == 'POST':
    #         tripname = request.POST.get('tripname')
    #         startdate = request.POST.get('startdate')
    #         enddate = request.POST.get('enddate')
    #         location = request.POST.get('location')
    #         vehicle = request.POST.get('vehicle')
    #         newTrip = Itinerary.objects.create(tripname=tripname, location=location,vehicle=vehicle, startDate=startdate, endDate=enddate)
    #         newTrip.save()

    #         serializer = ItinerarySerializer(newTrip)
    #         return Response(serializer.data)
