from django.contrib.auth.models import AnonymousUser, User
from django.test import RequestFactory, TestCase
from django.urls import reverse
from rest_framework.test import RequestsClient
from .google_api_request import GOOGLE_API_KEY, BASE_COUNTRY, travelTime

# from .views import map, route
# from .google_api_request import travelTime

# python manage.py test main.tests

class TestAPI(TestCase):
    @classmethod
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
    # def test_main_route(self):
    #     response = self.client.get(reverse('route'))
    #     self.assertEqual(response.status_code, 200)

    def test_google_api_request(self):
        input = [[{"text": "CoCo 都可(南昌門市)", "lat": 25.0302479, "lng": 121.5166022, "id": "4"}, {"text": "Bar M", "lat": 25.0285696, "lng": 121.5210357, "id": "3"}], [{"text": "JE Kitchen", "lat": 25.038473, "lng": 121.556077, "id": "6"}, {"text": "Impromptu by Paul Lee", "lat": 25.0541183, "lng": 121.5248205, "id": "5"}], [{"text": "MUME", "lat": 25.0363287, "lng": 121.5480527, "id": "8"}, {"text": "MUME", "lat": 25.0363287, "lng": 121.5480527, "id": "7"}]]
        self.assertEqual(travelTime(input), "[[\"2 minutes and 33 seconds\"], [\"16 minutes and 6 seconds\"], [\"0 seconds\"]]")
