from django.test import TestCase

# Create your tests here.

# RUN IN TERMINAL
# python manage.py test itinerary.tests

from .models import Itinerary

class TestItinerary(TestCase):
    def setUp(self):
        Itinerary.objects.create(tripname = 'Green Island Trip', startDate = '2022-02-28', endDate = '2022-03-05', host = 'somebody')
        Itinerary.objects.create(tripname = 'Go to Japan', startDate = '2022-05-31', endDate = '2022-06-15', host = 'monkey', vehicle = 'boat')

    def test_host(self):
        greentrip = Itinerary.objects.get(tripname = 'Green Island Trip')
        self.assertEqual(greentrip.host, 'somebody')

    def test_status(self):
        greentrip = Itinerary.objects.get(tripname = 'Green Island Trip')
        jptrip = Itinerary.objects.get(tripname = 'Go to Japan')
        self.assertEqual(greentrip.status, 'past')
        self.assertEqual(jptrip.status, 'ongoing')

