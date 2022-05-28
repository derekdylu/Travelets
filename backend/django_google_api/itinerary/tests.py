from django.test import TestCase

# Create your tests here.

# RUN IN TERMINAL
# python manage.py test itinerary.tests

from .models import Itinerary

class TestItinerary(TestCase):
    def setUp(self):
        Itinerary.objects.create(tripname = 'Green Island Trip', startDate = '2022-02-28', endDate = '2022-03-05', host = 'somebody')
        # Itinerary.objects.create()

    def test_attribute(self):
        greentrip = Itinerary.objects.get(tripname = 'Green Island Trip')
        self.assertEqual(greentrip.host, 'somebody')

